import { PartialUser } from '@shared/graphql/types';

export interface AccountMachineContext extends Partial<PartialUser> {}

export type AccountMachineEvents =
  | { type: 'SET_ACCOUNT'; account?: AccountMachineContext }
  | { type: 'REMOVE_ACCOUNT'; account?: AccountMachineContext };

export type AccountMachineStates =
  | { value: 'idle'; context: AccountMachineContext }
  | { value: 'definedAccountData'; context: AccountMachineContext }
  | { value: 'removedAccountData'; context: AccountMachineContext };
