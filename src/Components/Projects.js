import React, { Component } from 'react';
import '../Stylesheets/Projects.css';
class Projects extends Component{

  render() {
    return (
      <div className='body-box'> 
        <ul className='list-box'>
          <li className='list-col-1-3'>
            <div>TypeDraw</div>
            <div>Project Image</div>
            <div>Project Description</div>
          </li>
          <li className='list-col-2-3'>
            <div>Cosmicsnaps</div>
            <div>Project 2 Image</div>
            <div>Project 2 Description</div>
          </li>
          <li className='list-col-3-3'>
            <div>Snake</div>
            <div>Project 3 image</div>
            <div>Project 3 Description</div>
          </li>
        </ul>
      </div>  
    )
  }
}

export default Projects;