import React from 'react';
import * as Styled from './styles';
import { Children } from '@shared/types/app/children';
import { Container as StyledContainer } from '@shared/components/styled';
import Header from '../Header';
import { Footer } from '../Footer';

interface ContainerProps extends Children {}

export const Container = ({ children }: ContainerProps) => {
  return (
    <StyledContainer>
      <Header />
      <Styled.Content>{children}</Styled.Content>
      <Footer />
    </StyledContainer>
  );
};
