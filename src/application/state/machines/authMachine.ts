import {
  AuthMachineContext,
  AuthMachineEvents,
  AuthMachineStates,
} from './types/authMachine';
import { createMachine } from 'xstate';
import { assign } from 'xstate/lib/actions';
import { localCache } from '@infra/cache/local';
import { AUTH_KEY } from '@shared/constants';
import { AuthTokens } from '@shared/types/common/authTokens';

export const authMachine = createMachine<
  AuthMachineContext,
  AuthMachineEvents,
  AuthMachineStates
>(
  {
    initial: 'idle',
    states: {
      idle: {
        invoke: {
          src: 'getPersistedAuth',
        },

        on: {
          LOG_IN: 'loggedIn',
        },
      },
      loggedIn: {
        entry: 'handleAuthData',
        on: {
          REFRESH_TOKENS: {
            actions: 'handleAuthData',
          },
          LOG_OUT: 'loggedOut',
        },
      },
      loggedOut: {
        entry: 'removeAuthData',
        always: 'idle',
      },
    },
  },
  {
    actions: {
      handleAuthData: assign((ctx, { auth }, meta) => {
        if (meta._event.origin) return { ...auth };

        const accessToken = auth?.accessToken || ctx.accessToken;
        const refreshHash = auth?.refreshHash || ctx.refreshHash;

        localCache.set(AUTH_KEY, { accessToken, refreshHash });

        return { accessToken, refreshHash };
      }),
      removeAuthData: assign(() => {
        localCache.remove(AUTH_KEY);

        return {};
      }),
    },
    services: {
      getPersistedAuth: () => (send) => {
        const auth = localCache.get(AUTH_KEY) as AuthTokens;
        if (auth) send({ type: 'LOG_IN', auth: { ...auth } });
      },
    },
  },
);
