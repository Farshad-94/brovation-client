import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.scss'
import Logo from '../assets/logo/Brovation.svg';


export default function Header() {

  return (
    <div >
    <Navbar 
      className="navbar"
      collapseOnSelect 
      sticky="top"  
      expand="lg">
        <Navbar.Brand href="/">
          <img style={{width: "30%"}} src={Logo}></img> 
          
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navbar-item">
            <Nav.Link style={{fontWeight:"800", fontSize:"large"}} href="/"><i className="fas fa-font-case">Home</i></Nav.Link>
            <Nav.Link style={{fontWeight:"800", fontSize:"large"}} href="/services"><i className="fas fa-font-case">Services</i></Nav.Link>
            <Nav.Link style={{fontWeight:"800", fontSize:"large"}} href="/message"><i className="fas fa-font-case">Contact Us</i></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

