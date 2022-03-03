import { Container as StyledContainer } from '@shared/components/styled';
import styled, { css } from 'styled-components';

export const Container = styled(StyledContainer)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
