import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='Newsletter'/>
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And never miss the latest updates</p> 
      </div>
      <div className='app__newsletter-input flex__center  '></div>
         <input type='email' placeholder='Enter your e-mail address' />
         <button type='button' className='custom__button'>Subscribe</button>
    </div>

)

export default Newsletter