import React from 'react';
import { Component } from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import { BrowserRouter } from 'react-router-dom';
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
        <Portfolio />
      )
    }

    const ContactUsPage = () => {
      return (
        <ContactUs />
      )
    }



    return(
        <>
          <BrowserRouter>
            <Switch location={this.props.location}>
              <Route path='/home' component={HomePage} />
              <Route path='/services' component={ServicesPage} />
              <Route path='/portfolio' component={PortfolioPage} />
              <Route path='/contactus' component={ContactUsPage} />
              <Redirect to="/home" />
            </Switch>
          </BrowserRouter>
        </>
    )
  }
}

export default App;
