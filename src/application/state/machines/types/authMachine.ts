import { AuthTokens } from '@shared/types/common/authTokens';

export interface AuthMachineContext extends AuthTokens {}

export type AuthMachineEvents =
  | { type: 'REFRESH_TOKENS'; auth?: AuthMachineContext }
  | { type: 'LOG_IN'; auth?: AuthMachineContext }
  | { type: 'LOG_OUT'; auth?: AuthMachineContext };

export type AuthMachineStates =
  | { value: 'idle'; context: AuthMachineContext }
  | { value: 'loggedIn'; context: AuthMachineContext }
  | { value: 'loggedOut'; context: AuthMachineContext };
