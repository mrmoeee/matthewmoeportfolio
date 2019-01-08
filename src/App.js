import React, { Component } from 'react';
import SomeComponent from './SomeComponent.js';
import SomeNavbar from './SomeNavbar';
import './Stylesheets/App.css';
import './Stylesheets/SomeNavbar.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="navbar-box">
        <SomeNavbar />
        </header>

        <SomeComponent />
       

      </div>
    );
  }
}

export default App;
