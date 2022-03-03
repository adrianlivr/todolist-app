import { defaultTheme } from './defaultTheme';
import { darkShades } from './shades/darkShades';

export const darkTheme = {
  ...defaultTheme,
  colors: {
    primary: '#3191E8',
    secondary: '#30E8C6',
    tertiary: '#4C30E8',
    quartenary: '#E88930',
    border: '#4D4D4D',
    text: '#9B9B9B',
    title: '#D9D9D9',
    content: '#414141',
    background: '#212121',
    warning: '#E8C630',
    error: '#E84C30',
  },
  shades: { ...darkShades },
};
