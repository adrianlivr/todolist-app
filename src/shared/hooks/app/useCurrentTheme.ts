import { GlobalStateContext } from '@application/state/contexts/GlobalStateContext';
import { useSelector } from '@xstate/react';
import { useContext } from 'react';
import Themes from '@application/styles/themes';
import { ThemeType } from '@application/styles/themes/defaultTheme';

export const useCurrentTheme = () => {
  const { themeService } = useContext(GlobalStateContext);

  const themeMode = useSelector(
    themeService,
    ({ context }) => context.currentTheme,
  );

  const currentTheme = Themes[`${themeMode}Theme` as keyof typeof Themes];

  return currentTheme as ThemeType;
};
