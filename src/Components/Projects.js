import React, { Component } from 'react';

class Projects extends Component{

  render() {
    return (
      <div className='body-box'> 
        <ul>
          <li>
            <div>Project Name</div>
            <div>Project Image</div>
            <div>Project Description</div>
          </li>
          <li>
            <div>Project 2 Name</div>
            <div>Project 2 Image</div>
            <div>Project 2 Description</div>
          </li>
          <li>
            <div>Project 3 Name</div>
            <div>Project 3 image</div>
            <div>Project 3 Description</div>
          </li>
        </ul>
      </div>  
    )
  }
}

export default Projects;