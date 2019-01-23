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
  switch(location.pathname) {
    case location.pathname === "/":
      cName = "nav-container about";
      console.log(cName + 'ABOUT');
    break;
    default:
      cName = "nav-container home";
      console.log(cName + '!!!!');
  }
  // if (location.pathname === "/") {
  //   cName = "nav-container home";
  // } else if (location.pathname ==="")
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