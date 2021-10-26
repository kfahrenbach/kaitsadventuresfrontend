import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import beach from '../../../static/assets/images/redwoods/CaliforniaCoast.jpg';
import bigTree from '../../../static/assets/images/redwoods/redwoods_big_tree.jpg';
import fell from '../../../static/assets/images/redwoods/redwoods_fell.jpg';
import drivethru from '../../../static/assets/images/redwoods/redwoods_drivethru.jpg';
import tall from '../../../static/assets/images/redwoods/redwoods_tall.jpg';
import redwoods from '../../../static/assets/images/redwoods/redwoods.jpg';

export default class California extends Component {
    constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  getComments() {  
    fetch('https://kaits-adventures-comments-api.herokuapp.com/comments')
    .then(response => response.json())
      .then(data => {
        this.setState({
          comments: data
        })
        console.log(this.state.comments);
      }).catch(error => {
          console.log("getComment error", error)
    })
  }

  renderComments() {
    let commentsFromAPI = <div></div>;
    if (typeof this.state.comments==='undefined') {
      console.log('undefined');
      return commentsFromAPI;
    }
    else {
    commentsFromAPI = this.state.comments.map(comment=> (
      <div className="comment">
        <div> {comment.content} -{comment.name} </div>
      </div>
    ))
    }
    return commentsFromAPI
  }
  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <div className="blog-post">
        <div className="page-content">
          <div className="left">
            <img src={beach} />
          </div>
          Crescent Beach Overlook offers a stunning view of the Pacific Ocean in California. We relaxed here, enjoying the soothing sounds of the waves, admiring the little sea lions playing while watching the sunset. 
          We couldn't get enough of the view and decided to camp here. In the middle of the night, we were awoken by a cop because we weren't allowed to sleep here. Luckily no citations were given, we just needed to move along.
          He thought the nearest campground would be full since it was a weekend night in August at one of America's most beautiful National Parks, therefore, he suggested we try a hotel. 
          We drove to the nearest hotel, which was completely booked for the night besides one room where there were plumming issues. At this point, there were only a few hours until daylight and the room was expensive for not having a functioning bathroom, 
          so we decided to go to the nearest Walmart to camp for the night like we had done many times.
        </div>
        <div className="page-content">
          The next day we went to the Redwoods to explore! This tree is literally called Big Tree. I wonder how it got that name! Big Tree is over 1500 years old! 
          At a height of 286 feet and 23.7 feet in diameter, it's not a tree you want to mess with!
          I felt so tiny next to all the trees here!
          <div className="middle">
            <img src={bigTree} />
          </div>
        </div>
        <div className="page-content three">
          <div className="left">
            <img src={redwoods} /> 
          </div>
          <div className="middle">
            <img src={tall} /> 
          </div>
          <div className="right">
            <img src={fell} />
          </div>
        </div>
        <div className="page-content">
          We drove through a Redwood! One of my best friends, Joe is waving in the front, can you see him? There was a line that we had to wait in, but we only had about five vehicles in front of us, so it wasn't too long of a wait!
          <br></br>If you were wondering, this is his car that we slept in in the Walmart parking lot! The seats actually weren't that uncomfortable to sleep in... or maybe I'm just too cheap to admit that it wasn't that bad.
          <div className="right">
            <img src={drivethru} />
          </div>
        </div>
        <div className="page-content one comments">
          <div className="title">
            Comments:
          </div>
          <div className="comments-container">
          Comment box coming soon!
          Please click                 
          <NavLink to="/contact" className="contact">
                   here
          </NavLink>and send me a message if you would like to be featured in the comments section!
          <br></br>
          </div>
          {this.renderComments()}
        </div>
      </div>
    );
  }
}