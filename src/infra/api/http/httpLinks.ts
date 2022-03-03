import { ApolloLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AppConfig } from 'src/application/config';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { decodeToken } from 'react-jwt';
import dayjs from 'dayjs';
import { AuthTokens } from '@shared/types/common/authTokens';
import { GlobalServices } from '@shared/types/common/globalServices';

export const authLink = (accessToken?: string) =>
  setContext((_, { headers }) => ({
    headers: {
      ...headers,
      ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
    },
  }));

const TOKEN_EXPIRES_OFFSET = 30;

export const refreshTokenLink = (
  { accessToken, refreshHash }: Partial<AuthTokens>,
  { authService, accountService, themeService }: GlobalServices,
) =>
  new TokenRefreshLink<AuthTokens>({
    accessTokenField: 'refreshAccessToken',
    isTokenValidOrUndefined: () => {
      const isExpired = (token?: string) => {
        if (!token) return false;

        const expiration = (decodeToken(token) as { exp: number })?.exp;
        const now = dayjs().unix();

        return now + TOKEN_EXPIRES_OFFSET >= expiration;
      };

      return !isExpired(accessToken);
    },
    fetchAccessToken: async () => {
      return fetch(AppConfig.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken || ''}`,
          'X-Refresh-Hash': refreshHash || '',
        },
        body: JSON.stringify({
          query: `
            query RefreshAccessToken {
              refreshAccessToken {
                accessToken
                refreshHash
              }
            }
          `,
        }),
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((response) => response);
    },
    handleResponse: () => (resp: { data: any }) => resp.data,
    handleFetch: (data) => {
      const updatedAuth = {
        accessToken: data.accessToken ? data.accessToken : accessToken,
        refreshHash: data.refreshHash ? data.refreshHash : refreshHash,
      };

      authService.send('REFRESH_TOKENS', {
        ...updatedAuth,
      });
    },
    handleError: (error) => {
      if (error.message === 'Unauthorized to generate new access token') {
        authService.send('LOG_OUT');
        accountService.send('REMOVE_ACCOUNT');
        themeService.send('REMOVE_THEME');
      }
    },
  }) as unknown as ApolloLink;

export const httpLink = new HttpLink({
  uri: AppConfig.API_URL,
  credentials: 'include',
});
