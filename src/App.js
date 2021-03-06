import React from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import { HashRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import HoverScrollTop from './components/HoverScrollTop';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './shared/theme';

export default function App() {
  return (
    <>
      <MuiThemeProvider theme = {theme}>
        <HashRouter>
          <Switch>
            <Route path='/home' component={() => (<Home/>)} />
            <Route path='/services' component={() => (<Services/>)} />
            <Route path='/portfolio' component={() => (<Portfolio/>)} />
            <Route path='/aboutus' component={() => (<AboutUs/>)} />
            <Redirect to="/home" />
          </Switch>
        </HashRouter>
      </MuiThemeProvider>

      {/*HOVERING CIRCULAR BUTTON THAT ALLOWS YOU TO SCROLL TO THE TOP OF THE PAGE*/}
      <HoverScrollTop />
    </>
  )
}
