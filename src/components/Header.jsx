import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function Header() {
    return (
      <div>
        <div className='header'>
          <span className='inlineheader'>     
            <span className="headerlinks">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                 
              <Link to="/my-full-site" className='public-header'>Home</Link>
                &nbsp;&nbsp;
                <Link to="/about" className='public-header'>About</Link>
                &nbsp;&nbsp;
                <Link to="/contact" className='public-header'>Contact</Link>
                </Nav>
                
                </Navbar.Collapse>
              </Navbar>
            </span>
          </span>
        </div>
      </div>  
    )
  }
  export default Header
  
  
  