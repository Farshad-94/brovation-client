import React, { Component } from 'react';
import SwipableCarousel from './SwipableCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './home.scss';



export default class Home extends Component {
  render() {
    return (
      <div style={{color: "#FFFFFF"}} className="container">
        <div className="content">

          <h1 className="heading" data-reveal-delay="200">
            <span className="heading__title">
              <i className="fas fa-font-case">Brovation</i>   
            </span> <br />

            <i style={{marginTop: "1rem"}} className="fas fa-font-case">for Home Renovation and <br /> Landscaping Services</i>
          </h1>


          <div className="info">
            <h3 data-reveal-delay="400">
              <i className="fas fa-font-case">
                  Family owned and operated in Toronto, Ontario
              </i>
            </h3>
          </div>

          <div className="illustration">
            <SwipableCarousel />
          </div>


          <div className="info">
            <p data-reveal-delay="400">
              <i className="fas fa-font-case">
                  with years of hands-on experience and academic expertise of construction industry, 
                  Brovation Inc. is pleased to provide you with top quality home renovation and landscaping services. bringing passion into each project, Brovation Inc. builds and provides various renovation and repair of bathrooms, kitchens, basements, and other parts of houses and condo-apartments. 
              </i>
            </p>
          </div>

        </div>
      </div>
    )
  }
}

