import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
      color: ${theme.colors.title};
    }
  `}
`;
