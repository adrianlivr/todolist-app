import { defaultShades } from './shades/defaultShades';

export const defaultTheme = {
  colors: {
    white: '#FFF',
    primary: '#3191E8',
    secondary: '#30E8C6',
    tertiary: '#4C30E8',
    quartenary: '#E88930',
    border: '#F3F3F3',
    text: '#808080',
    title: '#505050',
    content: '#FFFFFF',
    background: '#F8F8F8',
    warning: '#E8C630',
    error: '#E84C30',
  },
  shades: { ...defaultShades },
  fonts: {
    title: '700 2.5rem Signika',
    subTitle: '500 2rem Signika',
    text: '400 .9rem Nunito Sans',
    button: '600 1.2rem Nunito Sans',
    label: '400 1.6rem Nunito Sans',
  },
  radius: {
    button: '0.5rem',
    roundedButton: '20rem',
    card: '0.6rem',
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '64em',
    xl: '85em',
    xxl: '90em',
  },
  shadows: {
    header: '0 3px 30px rgb(0 0 0 / 8%), 0 3px 20px rgb(0 0 0 / 8%)',
    sidebar: '0 3px 30px rgb(0 0 0 / 10%), 0 3px 20px rgb(0 0 0 / 10%)',
    card: '0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)',
    button: '0 1px 3px 0 rgba(0,0,0,.15),0 4px 6px 2px rgba(0,0,0,.15)',
  },
  size: (space: number, unit = 'rem') =>
    `calc(${space * 0.6 * 0.0625}${unit} + ${space * 0.4}px)`,
  spacing: (space: number, unit = 'rem') => `${space * 0.0625}${unit}`,
};

export type ThemeType = typeof defaultTheme;
