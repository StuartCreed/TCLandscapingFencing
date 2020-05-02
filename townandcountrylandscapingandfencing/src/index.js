import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ColourTheme from './ColourTheme';

const theme = createMuiTheme({
   palette: {
      primary: {
        main: ColourTheme.FirstColour
      },
      secondary: {
        main: ColourTheme.ThirdColour
      },
   },
});

ReactDOM.render(
  <MuiThemeProvider theme = {theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
