import React from 'react';
import { Component } from 'react';
import './NavBar.css';

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
                <div>Home</div>
                <div>Services</div>
                <div>Portfolio</div>
                <div>Portfolio</div>
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

    return(
      <>
        <ul class="nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#clients">Our Clients</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><button id="navBarToggler" onClick={this.toggleNavModal}>Open Modal</button></li>
        </ul>
        <NavModal isNavModalOpen={this.state.isNavModalOpen} toggleNavModal={this.toggleNavModal} />
      </>
    )
  }
}

export default NavBar
