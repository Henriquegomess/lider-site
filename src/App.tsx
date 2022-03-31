import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import { Footer } from './Components/Footer';
import { RoutesPage } from './Components/Routes';
import { LiderTheme } from './Components/Theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={LiderTheme()}>
      <CssBaseline />
      {/* <Header /> */}
      <RoutesPage />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
