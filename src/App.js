import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Home from './components/Home/Home'
import './App.scss';

const theme = createMuiTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home/>
    </ThemeProvider>
  );
}

export default App;
