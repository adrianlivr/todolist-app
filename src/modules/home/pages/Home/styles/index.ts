import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    width: 100%;
    min-height: 100vh;
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding-top: ${theme.spacing(30)};
    height: ${theme.size(300)};
    justify-content: center;
    align-items: flex-start;
  `}
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    width: ${theme.size(20)};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font: ${theme.fonts.title};
    color: ${theme.colors.title};
  `}
`;
