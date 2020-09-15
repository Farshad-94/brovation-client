import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { yellow, orange } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './header.scss'
import Logo from '../assets/logo/Brovation.svg';

export default function Header() {

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(yellow[300]),
      backgroundColor: yellow[300],
      '&:hover': {
        backgroundColor: orange[100],
      },
    },
  }))(Button);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'block',
      flexWrap: 'wrap',
    },
    margin: {
      marginTop: theme.spacing(1),
    },
  }));
  
const classes = useStyles();


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
          <Nav className="navbar navbar-expand-lg navbar-light warning-color lighten-5" >
             <Nav.Link style={{fontWeight:"800", fontSize:"large"}} href="/"><i className="fas fa-font-case">Home</i></Nav.Link>
            <Nav.Link style={{fontWeight:"800", fontSize:"large"}} href="/services"><i className="fas fa-font-case">Services</i></Nav.Link>
            <Nav.Link style={{fontWeight:"800", fontSize:"large"}} href="/message"><i className="fas fa-font-case">Contact Us</i></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>

      {/* <div>
				<ul className="nav">
					<li className="nav-item slam-left"><a href="/"><img style={{width: "30%"}} src={Logo}></img></a></li>
					<li className="nav-item"><a href="/">Home</a></li>
					<li className="nav-item"><a href="/services">Services</a></li>
					<li className="nav-item"><a className="contact" href="/message">Contact Us</a></li>
				</ul>
			</div> */}
    </div>
  );
}

