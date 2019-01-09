import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import Projects from './Projects';
import Contact from './Contact';

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/info' component={Info} />
          <Route path='/projects' component={Projects} />
          <Route path='/contactme' component={Contact} />
        </Switch>
      </main>
    )
  }
}

export default Main;

