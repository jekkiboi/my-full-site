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
       
            <nav className="headerlinks">
              <Navbar expand="lg">
                            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            {/* <NavDropdown.Divider /> */}
                                {/* <Link to="/">
                                    <button class="button">
                                        <span data-title="Home"> Home</span>
                                    </button>
                                </Link> */}
                      <NavDropdown title="" id="basic-nav-dropdown" >
                      
                             {/* <NavDropdown.Divider /> */}
                      
                    </NavDropdown>
                    <Link to="/" className='public-header'>Home</Link>
                      &nbsp;&nbsp;
                      <Link to="/work" className='public-header'>Work</Link>
                      &nbsp;&nbsp;
                      <Link to="/about" className='public-header'>About</Link>
                      &nbsp;&nbsp;
                      <Link to="/contact" className='public-header'>Contact</Link>
                  </Nav>
                  
                </Navbar.Collapse>
              </Navbar>
              &nbsp; &nbsp;
            
            </nav>
         
          </span>
          
        </div>
      </div>
        
     
    )
  }
  export default Header
  
  
  