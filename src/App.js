import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import './Stylesheets/App.css';
import './Stylesheets/Header.css';
import './Stylesheets/Home.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* Navbar */}
        {/* Main */}
        <div className="portfolio">
          TAKE ME OUT
          <h1>Ugly colors are temporary</h1>
          <h2>Creating template for positioning</h2>
          <Header />
          <Main />
        </div>
      </HashRouter>    
    );
  }
}

export default App;
