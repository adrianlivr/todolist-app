import { localCache } from '@infra/cache/local';
import { ACCOUNT_KEY } from '@shared/constants';
import { ObjectLiteral } from '@shared/types/app/objectLiteral';
import { createMachine, assign } from 'xstate';
import {
  AccountMachineContext,
  AccountMachineEvents,
  AccountMachineStates,
} from './types/accountMachine';

export const accountMachine = createMachine<
  AccountMachineContext,
  AccountMachineEvents,
  AccountMachineStates
>(
  {
    initial: 'idle',
    states: {
      idle: {
        invoke: {
          src: 'getPersistedAccount',
        },
        on: {
          SET_ACCOUNT: 'definedAccountData',
        },
      },
      definedAccountData: {
        entry: 'handleAccountData',
        on: {
          REMOVE_ACCOUNT: 'removedAccountData',
        },
      },
      removedAccountData: {
        entry: 'removeAccountData',
        always: 'idle',
      },
    },
  },
  {
    actions: {
      handleAccountData: assign((ctx, { account }, meta) => {
        if (meta._event.origin) return { ...account };

        const id = account?.id || ctx.id;
        const name = account?.name || ctx.name;
        const email = account?.email || ctx.email;
        const photo = account?.photo || ctx.photo;

        localCache.set(ACCOUNT_KEY, { id, email, photo, name });

        return { id, email, photo, name };
      }),
      removeAccountData: assign(() => {
        localCache.remove(ACCOUNT_KEY);

        return {};
      }),
    },
    services: {
      getPersistedAccount: () => (send) => {
        const account = localCache.get(ACCOUNT_KEY) as ObjectLiteral;

        if (account) send({ type: 'SET_ACCOUNT', account });
      },
    },
  },
);
