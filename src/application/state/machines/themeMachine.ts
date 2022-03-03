import { localCache } from '@infra/cache/local';
import { THEME_KEY } from '@shared/constants';
import { createMachine, assign } from 'xstate';
import {
  CurrentThemeType,
  ThemeMachineContext,
  ThemeMachineEvents,
  ThemeMachineStates,
} from './types/themeMachine';

export const themeMachine = createMachine<
  ThemeMachineContext,
  ThemeMachineEvents,
  ThemeMachineStates
>(
  {
    initial: 'idle',
    context: {
      currentTheme: 'default',
    },
    states: {
      idle: {
        invoke: {
          src: 'getPersistedTheme',
        },
        on: {
          SET_THEME: 'definedTheme',
        },
      },
      definedTheme: {
        entry: 'handleTheme',
        on: {
          CHANGE_THEME: {
            actions: 'handleTheme',
          },
          REMOVE_THEME: 'removedTheme',
        },
      },
      removedTheme: {
        entry: 'removeTheme',
        always: 'idle',
      },
    },
  },
  {
    actions: {
      handleTheme: assign((ctx, { theme }, meta) => {
        if (meta._event.origin) return { ...theme };

        const currentTheme = theme?.currentTheme || ctx.currentTheme;
        localCache.set(THEME_KEY, currentTheme);

        return { currentTheme };
      }),
      removeTheme: assign(() => {
        localCache.remove(THEME_KEY);
        return {};
      }),
    },
    services: {
      getPersistedTheme: () => async (send) => {
        const currentTheme = localCache.get(THEME_KEY) as CurrentThemeType;

        if (currentTheme) send({ type: 'SET_THEME', theme: { currentTheme } });
      },
    },
  },
);
