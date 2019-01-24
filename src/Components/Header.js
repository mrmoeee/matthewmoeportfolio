import React from 'react';
import { Link } from 'react-router-dom';
// switch(param) {
//   case 'foo':
//     return 'bar';
//   default:
//     return 'foo';
// }
const Header = ({ location }) => {
  console.log(location.pathname);
  let cName;

  if (location.pathname === "/") {
    cName = "nav-container-home";
  } else if (location.pathname ==="/about") {
    cName = "nav-container-about";
  } else if (location.pathname === "/projects") {
    cName = "nav-container-project"
  } else {
    cName = "nav-container-contact"
  }
  console.log("cname!" + cName);
  return (
    <div className={cName}>
      <ul className="list-container">

        <li className="home-btn"><Link className="home-link" to="/">Home</Link></li>  
        <li className="about-btn"><a href="#/about">About</a></li>
        <li className="projects-btn"><a href="#/projects">Projects</a></li>
        <li className="contact-btn"><a href="#/contactme">Contact</a></li>
      </ul>
    </div>
  );
};

export default Header;