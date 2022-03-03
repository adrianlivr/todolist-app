import { ThemeType } from '@application/styles/themes/defaultTheme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
