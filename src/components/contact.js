import React, { Component } from 'react';
 
export default class Contact extends Component {
  render() {
// contact me form? import snap follow code. 
    return (
      <div className="contact">
        <div className="font-awesome">
          <div className="instagram">
            <a href="http://www.instagram.com/kfahrenbach"><i className="fab fa-instagram" aria-hidden="true"></i></a>
            @kfahrenbach
          </div>
          <div className="snapchat">
            <a href="http://www.snapchat.com/add/pickledickle"><i className="fab fa-snapchat-ghost"></i></a>
            @pickledickle
          </div>
          <div className="email">
          <a href="mailto:fahrenbachkh@gmail.com?subject=Hey!&body=I%20saw%20your%20awesome%20website%20and%20wanted%20to%20say%20hi!">
            <i className="fas fa-paper-plane"></i></a>
            fahrenbachkh@gmail.com
          </div>
        </div>
      </div>
    );
  }
}