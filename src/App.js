import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Home from './components/Home/Home'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.scss';

const theme = createMuiTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Home/>
        </Provider>
    </ThemeProvider>
  );
}

export default App;
