export type CurrentThemeType = 'default' | 'dark';

export interface ThemeMachineContext {
  currentTheme?: CurrentThemeType;
}

export type ThemeMachineEvents =
  | { type: 'SET_THEME'; theme?: ThemeMachineContext }
  | { type: 'CHANGE_THEME'; theme?: ThemeMachineContext }
  | { type: 'REMOVE_THEME'; theme?: ThemeMachineContext };

export type ThemeMachineStates =
  | { value: 'idle'; context: ThemeMachineContext }
  | { value: 'definedTheme'; context: ThemeMachineContext }
  | { value: 'removedTheme'; context: ThemeMachineContext };
