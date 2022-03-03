import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `}

  a {
    color: #fff;
    font-weight: bold;
  }
`;
