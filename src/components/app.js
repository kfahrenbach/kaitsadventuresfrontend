import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Navigation from './navigation';
import Home from './home';
import Contact from './contact';
import Blog from './blog';
import California from './blog/california';
import Canada from './blog/canada';
import Ocmd from './blog/ocmd';
import Jamaica from './blog/jamaica';
import ValleyOfFire from './blog/valleyOfFire';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Home" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Blog" component={Blog} />
          <Route path="/California" component={California} />
          <Route path="/Canada" component={Canada} />
          <Route path="/Ocmd" component={Ocmd} />
          <Route path="/Jamaica" component={Jamaica} />
          <Route path="/ValleyOfFire" component={ValleyOfFire} />
        </Switch>
      </div>
    );
  }
}
