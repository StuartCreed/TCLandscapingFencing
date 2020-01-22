import React from 'react';
import { Component } from 'react';
import './NavBar.css';
import PrimaryColour from '../../ColourTheme';

const theme = PrimaryColour;

class NavBar extends Component {
  constructor(props) {
    super(props);
       this.state = {
         isNavModalOpen: "No",
         isThisAMobile: false
    };
    this.toggleNavModal = this.toggleNavModal.bind(this);
  }

  toggleNavModal() {
    if (this.state.isNavModalOpen == "No") {
      this.setState({
        isNavModalOpen: "Yes"
      });
    }
    if (this.state.isNavModalOpen == "Yes") {
      this.setState({
        isNavModalOpen: "No"
      });
    }

  }

  render() {

    function NavModal({isNavModalOpen, toggleNavModal}) {
      if (isNavModalOpen == "Yes") {
        return (
          <div id="nav-modal-open">
            <div id="nav-modal-content">
              <span id="nav-modal-close" onClick={toggleNavModal}>&times;</span>
              <div><span id="NavModalMenuHeader">Navigation Menu</span>
                <a>Services</a>
                <a>Portfolio</a>
                <a>About Us</a>
                <a>Contact Us</a>
              </div>
            </div>
          </div>
        )
      }

      else {
        return (
        <div></div>
        )
      }
    }

    function ContactBanner() {

      const bannerContainerStyle = {
        margin: "0",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        backgroundColor: theme,
      };

      return (
        <div style={bannerContainerStyle}>
          <div id="contactBanner">Contact Us now for a no obligation, FREE QUOTATION! tcland-enquiries@hotmail.co.uk — 07815946340 (Andy) /07870519614 (Richard) </div>
        </div>
      )
    }

    function NavigationBar({toggleNavModal}) {
      return(
        <div class="nav">
          <div id="logo">Town and Country Landscaping and Fencing</div>
          <a>Services</a>
          <a>Portfolio</a>
          <a>About Us</a>
          <a>Contact Us</a>
          <button id="navBarToggler" onClick={toggleNavModal}>Open</button>
        </div>
      )
    }

    return(
      <>
        <div id="fixed-bar-container">
          <NavigationBar toggleNavModal={this.toggleNavModal}/>
          <ContactBanner />
          <NavModal isNavModalOpen={this.state.isNavModalOpen} toggleNavModal={this.toggleNavModal} />
        </div>
      </>
    )
  }
}

export default NavBar
