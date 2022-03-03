import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { AuthTokens } from '@shared/types/common/authTokens';
import { GlobalServices } from '@shared/types/common/globalServices';
import { authLink, httpLink, refreshTokenLink } from './http/httpLinks';

export const client = (
  { accessToken, refreshHash }: Partial<AuthTokens>,
  globalServices: GlobalServices,
) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      refreshTokenLink({ accessToken, refreshHash }, globalServices),
      authLink(accessToken).concat(httpLink),
    ]),
  });
