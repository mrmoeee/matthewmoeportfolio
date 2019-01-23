import React from 'react';

import Header from './Header';

const Contact = ({ location }) => {

  return (
    <div className='page'>
      <Header location={location}/>
      <div className='body-box'> 
        <h2>contact page stuff</h2>
      </div>  
    </div>
  )
  
}

export default Contact;