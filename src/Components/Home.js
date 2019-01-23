import React from 'react';

import Header from './Header';
//replace this import with the correct img
import tom from '../tomd.jpg';

const Home = ({ location }) => {

  return (
    <div className='page'>
      <Header location={location}/>
      <div className='body-box'> 
        <h2>Home page stuff</h2>
        {/* replace this image */}
        <img src={tom} alt={"tom"} />
      </div>
    </div>
  );
};

export default Home;
