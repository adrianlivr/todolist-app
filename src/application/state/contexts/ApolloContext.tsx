import React from 'react';
import { ApolloProvider as ApolloCtx } from '@apollo/client';
import { client } from '@infra/api/client';
import { Children } from '@shared/types/app/children';
import { useContext } from 'react';
import { GlobalStateContext } from './GlobalStateContext';
import { useSelector } from '@xstate/react';

export const ApolloProvider = ({ children }: Children) => {
  const globalServices = useContext(GlobalStateContext);
  const tokens = useSelector(
    globalServices.authService,
    (state) => state.matches('loggedIn') && state.context,
  );

  const { refreshHash, accessToken } = tokens || {};

  return (
    <ApolloCtx client={client({ accessToken, refreshHash }, globalServices)}>
      {children}
    </ApolloCtx>
  );
};
