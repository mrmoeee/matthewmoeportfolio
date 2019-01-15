import React, { Component } from 'react';
import Cosmic from '../Images/projectmain.png';
import Typedraw from '../Images/typedraw.gif';
import Snake from '../Images/snakey.gif';
import '../Stylesheets/Projects.css';
class Projects extends Component{

  render() {
    return (
      <div className='body-box'> 
        <ul className='list-box'>
          <li className='list-col-1-3'>
            <div>TypeDraw</div>
            <div> <img className='type-draw' src={Typedraw} alt={"Typedraw"}/> </div>
            <div>Project Description</div>
          </li>
          <li className='list-col-2-3'>
            <div>Cosmicsnaps</div>
            <div> <img className='cosmic' src={Cosmic} alt={"Cosmic"} /> </div>
            <div>Project 2 Description</div>
          </li>
          <li className='list-col-3-3'>
            <div>Snake</div>
            <div> <img className='snakey' src={Snake} alt={"Snake"}/> </div>
            <div>Project 3 Description</div>
          </li>
        </ul>
      </div>  
    )
  }
}

export default Projects;