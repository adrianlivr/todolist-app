import React from 'react';
import { useCurrentTheme } from '@shared/hooks/app/useCurrentTheme';
import { Children } from '@shared/types/app/children';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeProvider = ({ children }: Children) => {
  const currentTheme = useCurrentTheme();

  return (
    <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
  );
};
