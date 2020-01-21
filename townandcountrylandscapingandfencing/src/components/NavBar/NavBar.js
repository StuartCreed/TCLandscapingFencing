import React from 'react';
import { Component } from 'react';
import './NavBar.css';
import $ from "jquery";

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
    console.log("toggle initiated")
    this.setState({
      isNavModalOpen: "Yes"
    });
  }

  render() {

    function NavModal({isNavModalOpen, toggleNavModal}) {
      console.log("NavModal initiated")
      console.log("current state", isNavModalOpen)
      if (isNavModalOpen == "Yes") {
        console.log("Nav Modal is open")
        return (
          <div id="nav-modal-open">
            <div id="nav-modal-content">
              <span id="nav-modal-close" onClick={toggleNavModal}>&times;</span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
        )
      }

      else {
        console.log("Nav Modal is closed")
        return (
        <div></div>
        )
      }
    }

    return(
      <>
        <button id="myBtn" onClick={this.toggleNavModal}>Open Modal</button>
        <NavModal isNavModalOpen={this.state.isNavModalOpen} toggleNavModal={this.toggleNavModal} />
      </>
    )
  }
}

export default NavBar
