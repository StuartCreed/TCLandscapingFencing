import React from 'react';
import { Component } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import { HashRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path='/home' component={() => (<Home/>)} />
          <Route path='/services' component={() => (<Services/>)} />
          <Route path='/portfolio' component={() => (<Portfolio/>)} />
          <Route path='/aboutus' component={() => (<AboutUs/>)} />
          <Redirect to="/home" />
        </Switch>
      </HashRouter>
    </>
  )
}
