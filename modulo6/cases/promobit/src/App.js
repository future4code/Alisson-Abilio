import { ThemeProvider } from '@material-ui/core';
import React from 'react'
import theme from './constants/theme';
import Rotas from './routes/Router';



const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <Rotas />
    </ThemeProvider >
  );
}

export default App;
