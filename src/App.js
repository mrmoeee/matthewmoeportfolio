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
          <Header />
          <Main />
        </div>
      </HashRouter>    
    );
  }
}

export default App;
