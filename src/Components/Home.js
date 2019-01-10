import React, {Component} from 'react';
//replace this import with the correct img
import tom from '../tomd.jpg';

class Home extends Component {

  render() {
    return (
      <div className='body-box'> 
        <h2>Home page stuff</h2>
        {/* replace this image */}
        <img src={tom} alt={"tom"} />
      </div>  
    )
  }
};

export default Home; // relative path to image 
