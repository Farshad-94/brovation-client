import React, { Component } from 'react';
import './services.scss';

export class Services extends Component {
  render() {
    return (
      <div style={{color: "#FFFFFF"}} className="services-container">
       
          <div className="services-header">
              <h2 style={{fontWeight:"900", fontSize: "xx-large"}}><i className="fas fa-font-case">What we do</i>  
              </h2>
              <div>
                <i className="fas fa-font-case">
                  Brovation Inc. , Your Renovation Contractor
                </i>
              </div> 
          </div> 
          

          <div className="item1">
            <div className="item1__content">
              <h5 style={{fontWeight: "900", color: "#f5d02a"}} ><i className="fas fa-font-case">Kitchens</i></h5>
              <h6><i className="fas fa-font-case">kitchen remodel, countertops, cabinetry, walls, etc.</i></h6>
              <div>
                <i className="fas fa-font-case">

                </i>
              </div>
            </div>
            <div className="item1__photo">
              <img style={{margin: "auto", paddingTop: "0.5rem"}} className="medium ui image circular" src={require('./../assets/images/kitchen.jpg')}/>
            </div>
          </div>

          <div className="item1">
            <div className="item1__content">
              <h5 style={{fontWeight: "900", color: "#f5d02a"}} ><i className="fas fa-font-case">Bathrooms</i></h5>
              <h6><i className="fas fa-font-case">tiling installation and repair, toilets, tubs, shower systems, etc.</i></h6>
              <div>
                <i className="fas fa-font-case">

                </i>
              </div>
            </div>
            <div className="item1__photo">
              <img style={{margin: "auto", paddingTop: "0.5rem"}} className="medium ui image circular" src={require('./../assets/images/bathroom.jpg')}/>
            </div>
          </div>

          <div className="item1">
            <div className="item1__content">
              <h5 style={{fontWeight: "900", color: "#f5d02a"}} ><i className="fas fa-font-case"></i>Basements</h5>
              <h6><i className="fas fa-font-case">stairs, storage areas, sub-flooring, insulation upgrade, etc.</i></h6>
              <div>
                <i className="fas fa-font-case">

                </i>
              </div>
            </div>
            <div className="item1__photo">
              <img style={{margin: "auto", paddingTop: "0.5rem"}} className="medium ui image circular" src={require('./../assets/images/basement.jpg')}/>
            </div>
          </div>

          <div className="item1">
            <div className="item1__content">
              <h5 style={{fontWeight: "900", color: "#f5d02a"}} ><i className="fas fa-font-case">Whole House</i></h5>
              <h6><i className="fas fa-font-case">landscaping, attic conversion, interlocking, patching, drywall services, flooring, trim works, etc.</i></h6>
              <div>
                <i className="fas fa-font-case">

                </i>
              </div>
            </div>
            <div className="item1__photo">
              <img style={{margin: "auto", paddingTop: "0.5rem"}} className="medium ui image circular" src={require('./../assets/images/wholeHouse.jpg')}/>
            </div>
          </div>


        </div>

    )
  }
}

export default Services
