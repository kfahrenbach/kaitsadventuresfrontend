import React, { Component } from 'react';
import bighorn from '../../../static/assets/images/valley_of_fire/bighorn.jpg';
import cactus from '../../../static/assets/images/valley_of_fire/cactus.jpg';
import canyon from '../../../static/assets/images/valley_of_fire/canyon.jpg';
import chuckwalla from '../../../static/assets/images/valley_of_fire/chuckwalla.jpg';
import petroglyph from '../../../static/assets/images/valley_of_fire/petroglyph.jpg';
import white from '../../../static/assets/images/valley_of_fire/white.jpg';
import cave from '../../../static/assets/images/valley_of_fire/cave.jpg';

export default class ValleyOfFire extends Component {
  render() {
    return (
        
        <div className="blog-post">
          <div className="page-content three">
            This cave was hard to find. We followed directions we read online, following a dirt path. 
            We aren't sure we found the right 'cave', because it wasn't much of a cave, but it was still beautiful. <br></br>
            I took a picture of a cactus on our trek to find the cave. The scenery was breathtaking. I love the red rocks. It makes sense why they named it Valley of Fire.
            <div className="left">
                <img src={cave} /> 
            </div> 
            <div className="left">
              <img src={cactus} />
            </div>
          </div>
          <div className="page-content three">
            <div className="left">
                <img src={chuckwalla} /> 
            </div>
            We saw a few chuckwallas on our hikes. They were very skittish and run super fast. 
            They hid from us in the bushes which makes them almost impossible to see. <br></br>
            We were lucky enough to see some Big Horn Sheep while we were driving! The baby was so cute. Don't worry, dad was nearby, keeping an eye on these two from the other side of the road.
            <div className="right">
                <img src={bighorn} />
            </div>
          </div>
          <div className="page-content three">
            <div className="left">
              <img src={petroglyph} />
            </div>
            <div className="right">
              <img src={canyon} />
            </div>
            The petroglyphs here were made by hunters and gatherers between 1000-4000 years ago! 
            Today scientists don't recognize many of the ancient symbols. Some symbols we can recognize such as the bighorn sheep as you can see! <br></br> 
            This slot canyon is about halfway though the white dome trail!
          </div>
          <div className="page-content">
            <div className="right">
              <img src={white} />
            </div>
            The views in this park are absolutely breath-taking. 
            We were looking forward to going on a hike to see the fire wave, 
            but when we arrived at the parking area, it was guarded by cones, so we couldn't enter. 
            We found out that the trail is closed in the summer because it is so hot and dangerous to hike in the summer heat here.
            Dehydration and heat stress are very serious and it's too risky so the park closes some hiking trails for the hotter months in the year.
            It is recommended to always bring plenty of water with you on your hikes here! We plan to return for the fire wave hike in the off season when it's cooler and the trail is open.
          </div>
        </div>
    );
  }
}