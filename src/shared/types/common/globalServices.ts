import { accountMachine } from '@application/state/machines/accountMachine';
import { authMachine } from '@application/state/machines/authMachine';
import { themeMachine } from '@application/state/machines/themeMachine';
import { InterpreterFrom } from 'xstate';

export interface GlobalServices {
  authService: InterpreterFrom<typeof authMachine>;
  accountService: InterpreterFrom<typeof accountMachine>;
  themeService: InterpreterFrom<typeof themeMachine>;
}
