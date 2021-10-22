import React, { Component } from 'react';
import squirrel from '../../../static/assets/images/canada/squirrel.jpg';
import stream from '../../../static/assets/images/canada/stream.jpg';
import waterfall from '../../../static/assets/images/canada/waterfall_mountain.jpg';
import lake from '../../../static/assets/images/canada/lake_mountains.jpg';
import peyto from '../../../static/assets/images/canada/peyto.jpg';
import moraine from '../../../static/assets/images/canada/me_moraine.jpg';
import mountains from '../../../static/assets/images/canada/me_mountains.jpg';
import view from '../../../static/assets/images/canada/me_view.jpg';
import blueWaterfall from '../../../static/assets/images/canada/blue_waterfall.jpg';
import stream2 from '../../../static/assets/images/canada/stream2.jpg';
import louise from '../../../static/assets/images/canada/louise.jpg';
import peyto2 from '../../../static/assets/images/canada/peyto2.jpg';

export default class Canada extends Component {
  render() {
    return (
      <div className="blog-post">
      <div className="page-content one">
        Banff National Park and Jasper National Park are two of the most beautiful parks in the world.
        They are right next to each other so you can go to both on the same trip. 
        It's definitely worth spending an extra couple days to experience the breathtaking views in both parks and surrounding areas.
        <br></br>
        Pictured below is Peyto Lake in Jasper National Park. We woke up early to come here and it was pretty cold, even in August!
        The water gets its beautiful blue color from the glacier!
      </div>
      <div className="page-content">
        <div className="left">
          <img src={peyto2} />
        </div>
        <div className="right">
            <img src={peyto} />
        </div>
      </div>
      <div className="page-content three">
        There are HUGE squirrels here, probably from people feeding them. Although the animals are cute, please, do not feed wildlife in National Parks! 
        They will start relying on humans for food and sometimes become vicious. One other tip is to NEVER keep your food in the tent when you're camping because 
        animals have been known to chew through tents and (on rare occasion) attack people.
        <div className="middle">
            <img src={squirrel} /> 
        </div>
        <div className="right">
            <img src={mountains} />
        </div>
      </div>
      <div className="page-content three">
        <div className="left">
            <img src={blueWaterfall} /> 
        </div> 
        <div className="middle">
            <img src={waterfall} />
        </div>
        <div className="middle">
            <img src={stream} />
        </div>
      </div>
      <div className="page-content">
        <div className="left">
          <img src={view} />
        </div>
        <div className="right">
          <img src={moraine} />
        </div>
      </div>
      <div className="page-content">
        <div className="left">
          <img src={louise} />
        </div>
        Moraine Lake and Lake Louise are two of the well-known lakes in Banff National Park.
        The blue color of the lakes is something you must see for yourself. It's incredible.
        Lake Louise is typically very cloudy as you can see in the picture, but believe me, in person it's much more beautiful than you can imagine!
        Pictures unfortunately do not capture how gorgeous it truly is here.
        Everywhere you look in these parks will leave you in awe. 
      </div>
      <div className="page-content">
        <div className="left">
          <img src={lake} />
        </div>
        <div className="right">
          <img src={stream2} />
        </div>
      </div>
    </div>
    );
  }
}