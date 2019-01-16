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
            <div>sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere</div>
          </li>
          <li className='list-col-2-3'>
            <div>Cosmicsnaps</div>
            <div> <img className='cosmic' src={Cosmic} alt={"Cosmic"} /> </div>
            <div>sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere</div>
          </li>
          <li className='list-col-3-3'>
            <div>Snake</div>
            <div> <img className='snakey' src={Snake} alt={"Snake"}/> </div>
            <div>sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere</div>
          </li>
        </ul>
      </div>  
    )
  }
}

export default Projects;