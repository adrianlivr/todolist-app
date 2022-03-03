import styled, { css } from 'styled-components';

interface TitleProps {
  align?: string;
}

export const Title = styled.h1<TitleProps>`
  ${({ theme, align }) => css`
    font: ${theme.fonts.title};
    color: ${theme.colors.title};
    text-align: ${align || 'left'};
  `}
`;
