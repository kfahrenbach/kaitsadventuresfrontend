import React, { Component } from 'react';
import moraine from "../../static/assets/images/moraine.jpg";
import oceanCity from '../../static/assets/images/ocmd3.jpg';
import cliffsOfMoher from '../../static/assets/images/cliffs_of_moher.jpg';
import jamaica from '../../static/assets/images/jamaica.jpg';
import glacier from '../../static/assets/images/GlacierNP.jpg';
import palm from '../../static/assets/images/palm.jpg';
import bryce from '../../static/assets/images/Bryce3.jpg';
import redwoods from '../../static/assets/images/redwoods/redwoods_trees.jpg';
import valleyOfFire from '../../static/assets/images/valley_of_fire.jpg';
import { NavLink } from 'react-router-dom';
 

export default class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <div className="c">
          <div className="content">
            <div className="image-container">
              <div className="images">
                <div className="images-back">
                  <NavLink to="/California"  className="back">
                    Redwoods
                  </NavLink>
                </div>
                <div className="image">
                  <img src={redwoods} />
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="images">
                <div className="images-back">
                  <NavLink to="/ValleyOfFire"  className="back">
                    Valley Of Fire
                  </NavLink>
                </div>
                <div className="image">
                  <img src={valleyOfFire} />
                </div>
              </div>
            </div>
            {/* <div className="image-container">
              <div className="images">
                <div className="images-back">
                  <NavLink to="/Ocmd" className="back">
                    Glacier National Park
                  </NavLink>
                </div>
                <div className="image">
                <img src={glacier} />
                </div>
              </div>
            </div> */}
            <div className="image-container">
              <div className="images">
                <div className="images-back">
                  <NavLink to="/Canada" className="back">
                    Canada
                  </NavLink>
                </div>
                <div className="image">
                  <img src={moraine} />
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="images">
                <div className="images-back">
                  <NavLink to="/Jamaica" className="back">
                      Jamaica
                  </NavLink>
                </div>
                <div className="image">
                  <img src={jamaica} />
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="images">
                <div className="images-back">
                  <NavLink to="/Ocmd" className="back">
                    Florida
                  </NavLink>
                </div>
                <div className="image">
                  <img src={palm} />
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="images">
                <div className="images-back">
                  <NavLink to="/ocmd"  className="back">
                    Ireland
                  </NavLink>
                </div>
                <div className="image">
                  <img src={cliffsOfMoher} />
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="images">
                <div className="images-back">
                  <NavLink to="/Ocmd" className="back">
                    Ocean City Maryland
                  </NavLink>
                </div>
                <div className="image">
                  <img src={oceanCity} />
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="images">
                <div className="images-back">
                  <NavLink to="/Ocmd" className="back">
                    Bryce Canyon
                  </NavLink>
                </div>
                <div className="image">
                  <img src={bryce} />
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}