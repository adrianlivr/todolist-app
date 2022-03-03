import { ApolloLink } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { AppConfig } from '@application/config';
import { SubscriptionClient } from 'subscriptions-transport-ws';

export const wsLink = (token?: string): ApolloLink => {
  const wsClient = new SubscriptionClient(
    AppConfig.API_URL.replace('http', 'ws') as string,
    {
      reconnect: true,
      lazy: true,
      connectionParams: () => ({
        isWebSocket: true,
        headers: {
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
      }),
      reconnectionAttempts: 5,
      inactivityTimeout: 1000,
    },
  );

  wsClient.use([
    {
      applyMiddleware(options, next) {
        options.headers = {
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        };
        next();
      },
    },
  ]);

  return new WebSocketLink(wsClient);
};
