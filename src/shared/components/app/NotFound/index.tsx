import React from 'react';
import * as Styled from './styles';
import NotFoundImg from '@application/assets/not_found.png';

export const NotFound = () => {
  return (
    <Styled.Container>
      <img src={NotFoundImg} />
    </Styled.Container>
  );
};
