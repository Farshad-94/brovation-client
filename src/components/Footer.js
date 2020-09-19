import React, { Component } from 'react';
import Logo from '../assets/logo/Brovation.svg';
import './footer.scss';
import 'semantic-ui-css/semantic.min.css'
import { Link } from '@material-ui/core';


export class Footer extends Component {
  render() {
    return (
     
     
      <footer className="footer">

        <div className="container">

          <div className="footer-logo">
            <img style={{width: "40%"}} src={Logo}></img> 
          </div>

          <div className="footer-contact">
            <div style={{display: "grid"}}> 
              <h6> <span style={{fontWeight: "bolder"}}><i className="call square icon"></i> Cell:  </span> 647-562-8443 / 416-820-9756</h6> 
            </div>

            <div style={{display: "grid"}}>
            <h6> <span style={{fontWeight: "bolder"}}><i className="mail square icon"></i> Email:  </span> <a style={{color: "black"}} href="mailto:info@brovation.co">info@brovation.co</a> </h6>
            
            </div>
          </div>
          <div className="footer-social">
            
            <a href="https://www.facebook.com/Brovation.inc.renovation">
              <button style={{margin: "0.5rem"}} className="ui circular mini facebook icon button">
                <i className="facebook icon"></i>
              </button>
            </a>
           

          <a href="https://twitter.com/brovationc">
              <button style={{margin: "0.5rem"}} className="ui circular mini twitter icon button">
                <i className="twitter icon"></i>
              </button>
          </a>
            

          <a href="https://www.instagram.com/brovation.co/">
            <button style={{margin: "0.5rem"}} className="ui mini circular instagram icon button">
              <i className="instagram icon"></i>
            </button>
          </a>


          </div>
        </div>
        <div className="footer-copyright">
          Copyright &copy; 2020 Brovation Inc. | All rights reserved
        </div>
        
      </footer>
    )
  }
}

export default Footer
