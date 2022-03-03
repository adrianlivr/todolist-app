import styled, { css } from 'styled-components';

interface ButtonProps {
  rounded?: boolean;
  shadow?: boolean;
  preset?: 'primary' | 'secondary' | 'tertiary' | 'quartenary';
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, rounded, shadow = true, preset = 'primary' }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${rounded
      ? theme.radius.roundedButton
      : theme.radius.button};
    font: ${theme.fonts.button};
    box-shadow: ${shadow && theme.shadows.button};
    background-color: ${theme.shades[preset].c500};

    &:hover {
      background-color: ${theme.shades[preset].c600};
    }

    &:active {
      background-color: ${theme.shades[preset].c700};
    }
  `}

  border: none;
  color: #fff;
  padding: 1rem 2rem;
`;
