import React, { Component } from 'react';
import boat from '../../../static/assets/images/jamaica/boat.jpg';
import cat from '../../../static/assets/images/jamaica/cat.jpg';
import dunnsFalls from '../../../static/assets/images/jamaica/dunns_falls.jpg';
import hermitCrab from '../../../static/assets/images/jamaica/hermit_crab.jpg';
import kayaks from '../../../static/assets/images/jamaica/kayaks.jpg';
import lizard from '../../../static/assets/images/jamaica/lizard.jpg';
import minigolf from '../../../static/assets/images/jamaica/mini_golf.jpg';
import paddleBoat from '../../../static/assets/images/jamaica/paddle_boat.jpg';
export default class Jamaica extends Component {
  render() {
    return (
        <div className="blog-post">
          <div className="page-content three">
            <div className="left">
              <img src={boat} />
            </div>
            My parents and I had a great time in Jamaica. We went on an excursion to Dunn's river falls in Ocho Rios.
            We took a boat to sea to find a good coral reef to snorkel and see some beautiful tropical fish!
            They gave us some delicious jerk chicken to snack on while we rode to Dunn's river falls. At Dunn's falls, we climbed 
            a waterfall with our group which was so cool! The rocks are very slippery so you hold hands with your group members while climbing the falls for stability.
            <div className="right">
                <img src={dunnsFalls} />
            </div>
          </div>
          <div className="page-content three">
            We saw a few tiny lizards that were very skittish. They didn't let us get anywhere near them. <br></br>
            As we're relaxing on the beach, the cocktail servers brought us our drinks while we enjoyed the view, as we made friends with the hermit crabs that roamed all over the beach!
            <div className="middle">
                <img src={lizard} /> 
            </div>
            <div className="right">
                <img src={hermitCrab} />
            </div>
          </div>
          <div className="page-content three">
            <div className="left">
                <img src={cat} /> 
            </div> 
            At our resort, there were these adorable, friendly cats that were roaming around.
            <br></br>We played minigolf a couple times at our resort and this bird wanted to join us!
            <br></br>When we weren't stuffing our faces at the all you can eat buffet (the best part of resorts), we were laying on the beach, kayaking or trying to paddle in the paddle boat which isn't as fun or easy as you think!
            <div className="middle">
                <img src={minigolf} />
            </div>
          </div>
          <div className="page-content">
            <div className="left">
              <img src={paddleBoat} />
            </div>
            <div className="right">
              <img src={kayaks} />
            </div>
          </div>
          <div className="page-content one">
          Although we had a great time, I will say that Jamaica wasn't what I expected. The water is very stunning, but what I wasn't expecting was there to be lots of seaweed that is incredibly unpleasant to step on, and sea urchins everywhere that you DEFINITELY do not want to step on. I saw a baby stingray while I was swimming, which I almost tried picking up until I realized what it was. 
          They're magestical looking because they are clear, almost invisible. Snorkeling was cool also, but our resort had boundaries where we weren't allowed to go past, so we couldn't really swim like we're used to.
          </div>
        </div>
    );
  }
}