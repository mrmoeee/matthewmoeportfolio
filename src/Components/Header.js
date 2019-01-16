import React, {Component} from 'react';

class Header extends Component {

  render(){
    return (
      <div className='nav-container'>
        <ul className='list-container'>
          <li className='home-btn'><a href='#/'> Home </a></li>
          <li className='about-btn'><a href='#/about'>About</a></li>
          <li className='projects-btn'><a href='#/projects'>Projects</a></li>
          <li className='contact-btn'><a href='#/contactme'>Contact</a></li>
        </ul>
      </div>
    )
  }

}

export default Header;