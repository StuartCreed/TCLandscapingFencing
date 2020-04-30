import React from 'react';
import { Component } from 'react';
import 'typeface-roboto';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import { HashRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
       this.state = {
        pageView: null
    };
  }

  render() {

    const HomePage = () => {
      return(
        <Home/>
      )
    }

    const ServicesPage = () => {
      return (
        <Services/>
      )
    }

    const PortfolioPage = () => {
      return (
        <Portfolio/>
      )
    }

    const AboutUsPage = () => {
      return (
        <AboutUs />
      )
    }

    return(
        <>
          <HashRouter>
            <Switch location={this.props.location}>
              <Route path='/home' component={HomePage} />
              <Route path='/services' component={ServicesPage} />
              <Route path='/portfolio' component={PortfolioPage} />
              <Route path='/aboutus' component={AboutUsPage} />
              <Redirect to="/home" />
            </Switch>
          </HashRouter>
        </>
    )
  }
}

export default App;
