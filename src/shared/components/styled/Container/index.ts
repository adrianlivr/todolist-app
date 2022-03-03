import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    width: 100%;
    min-height: 100vh;
  `}
`;
