import React, { Component } from 'react';
import bryce from '../../static/assets/images/bryce_canyon.jpg';
 
export default class About extends Component {
  constructor(props) {
      super(props);
  }
//   picture
    render() {
    return (
        <div className="page-content">
            <div className="image">
                <img src={bryce}
                />
            </div>
            <div className="description">
                Hello! My name is Kait. One of my biggest passions is traveling. I'm a nerd at heart, constantly learning new things. Over the years, I've studied many languages to try to learn the basics that I may need to use while traveling abroad.
               <br></br>In December, my boyfriend and I will be going to Iceland, so my focus is currently dedicated to studying Icelandic. Though English is widely spoken there, I aim to be prepared, just in case! 
               In Iceland, we plan to explore the ice caves, Blue Lagoon, and volcanoes! We're hoping that we're lucky enough to see the Northern Lights
                and if the weather allows us, to explore all that the winter wonderland has to offer. We will be staying for New Years Eve to see the fireworks that go off all over Reykjavik that night! Stay tuned for my future blog posts about our trip!
            </div>
      </div>
    );
  }
}