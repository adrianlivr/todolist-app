import React, { useContext } from 'react';
import { GlobalStateContext } from '@application/state/contexts/GlobalStateContext';
import * as Styled from './styles';
import { useSelector } from '@xstate/react';
import { Button, Container, Title } from '@shared/components/styled';

interface HomeProps {}

export const Home = (props: HomeProps) => {
  const { themeService } = useContext(GlobalStateContext);
  const currentTheme = useSelector(
    themeService,
    ({ context }) => context.currentTheme,
  );

  return (
    <Container>
      <Styled.ButtonsWrapper>
        <Button
          rounded
          onClick={() => {
            themeService.send('CHANGE_THEME', {
              theme: { currentTheme: 'default' },
            });
          }}
          disabled={currentTheme === 'default'}
        >
          Tema claro
        </Button>
        <Styled.Separator />
        <Button
          rounded
          onClick={() => {
            themeService.send('CHANGE_THEME', {
              theme: { currentTheme: 'dark' },
            });
            console.log('dark');
          }}
          disabled={currentTheme === 'dark'}
        >
          Tema escuro
        </Button>
      </Styled.ButtonsWrapper>
      <Title align="center">
        Clique em algum dos botões para alterar o tema
      </Title>
    </Container>
  );
};
