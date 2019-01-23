import React from 'react';

import Header from './Header';
import '../Stylesheets/About.css';

const Info = ({ location }) => {

  return (
    <div className='page'> 
      <Header location={location}/>
      <div className='body-box'> 
        <div className='hob-1-3'>
          <div>Hobbies part 1</div>
          <div>Hobbies Description</div>
          <div>Maybe Some pics</div>
        </div>
        <div className='hob-2-3'>
          <div>Main Man</div>
          <div>Main Man picture</div>
          <div>Main Man description of technologies I know and who I am</div>
        </div>
        <div className='hob-3-3'>
          <div>Hobbies part 1</div>
          <div>Hobbies Description</div>
          <div>Maybe Some pics</div>
        </div>
      </div>
    </div> 
  )
  
}

export default Info;