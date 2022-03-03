import React from 'react';
import { AppRoutes } from './application/routes';
import GlobalStyle from './application/styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@application/state/contexts/ThemeContext';
import { GlobalStateProvider } from '@application/state/contexts/GlobalStateContext';

function App() {
  return (
    <GlobalStateProvider>
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
        <ToastContainer autoClose={3000} className="toast-container" />
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default App;
