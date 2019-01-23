import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Main extends Component {

  render() {
    return (
      <main>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contactme' component={Contact} />
        </Switch>
      </main>
    )
  }
}

export default Main;

