import React, { Component } from 'react';
import globe from '../../static/assets/images/globe.jpg';

export default class Home extends Component {
  render() {
    // put pictures from api? or just upload here.
    return (
      <div className="home">
        Hello! Welcome to my blog where you can follow my journeys as I explore the world!
        <br></br><br></br><br></br>
        <div className="visited-list">
          <div className="visited">
          <i className="fas fa-check"></i>
          40 States
          </div>
          <div className="visited">
          <i className="fas fa-check"></i>
          4 foreign countries
          </div>
          <div className="visited">
            <i className="fas fa-check"></i>
            2 Continents
          </div>
        </div>
        <br></br><br></br>
        <div className="bucketlist-wrapper">
        <div className="bucketlist">
          Top destinations on my Bucket List:
          <ul><li>
            Machu Picchu, Peru
          </li>
          <li>
            Iceland
          </li>
          <li>
            Havasu Falls, Arizona
          </li>
          <li>
            Switzerland
          </li>
          <li>
            Great Barrier Reef, Australia
          </li>
          <li>
            Hawaii
          </li></ul>
        </div>
        <img src={globe} />
        </div>
        <br></br><br></br>
      </div>
    );
  }
}