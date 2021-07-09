import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './themes/radioad/theme';
import Navigations from './navigations'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigations/>
    </ThemeProvider>

  );
}