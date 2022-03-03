import React from 'react';
import { createContext } from 'react';
import { InterpreterFrom } from 'xstate';
import { accountMachine } from '../machines/accountMachine';
import { authMachine } from '../machines/authMachine';
import { themeMachine } from '../machines/themeMachine';
import { Children } from '@shared/types/app/children';
import { useInterpret } from '@xstate/react';
import { GlobalServices } from '@shared/types/common/globalServices';

export const GlobalStateContext = createContext({} as GlobalServices);

export const GlobalStateProvider = ({ children }: Children) => {
  const authService = useInterpret(authMachine);
  const accountService = useInterpret(accountMachine);
  const themeService = useInterpret(themeMachine);

  return (
    <GlobalStateContext.Provider
      value={{ authService, accountService, themeService }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
