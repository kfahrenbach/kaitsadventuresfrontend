import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
export default class Navigation extends Component {
  render() {
    return (
      <div className="container">
        <div className="navigation">
            <div className="navLink">
                <NavLink to="/home" className="Home">
                    Home
                </NavLink>
            </div>
            <div className="navLink">
                <NavLink to="/blog" className="Blog">
                    Blog
                </NavLink>
            </div>
            <div className="navLink">
                <NavLink to="/about" className="About">
                    About
                </NavLink>
            </div>
            <div className="navLink">
                <NavLink to="/contact" className="Contact">
                    Contact
                </NavLink>
            </div>
        </div>
      </div>
    );
  }
}