import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    
    <div className='app__wrapper_img app__wrapper_img-reverse'>
     <img src={images.chef} alt='chef img'/>
    </div>

    <div className="app__wrapper_info"> 
       <SubHeading  title="Chef's Word"/>
       <h1 className='headtext__cormorant'>What We Believe In</h1>
    

    <div className='app__chef-content'> 
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quote_image'/>
         <p className='p_opensans'> 
         Every dish we create at Gericht is a canvas where culinary artistry 
         meets the soul of Kenya. 
         </p>
      </div>
      <p className='opensans'> We believe in crafting flavors that resonate 
         with our heritage, celebrating the bounty of our land, and inviting the 
         world to savor the harmony of cultures on a single plate. Each bite tells a story,
          a story of passion, innovation, and a deep reverence for the rich tapestry 
          of flavors that define us. At Gericht, we don't just serve food; we serve a piece 
          of our heart, a slice of our identity, and an invitation to embark on a remarkable 
          gastronomic journey.</p>
    </div>

    <div className='app__chef-sign'>
      <p>Kevin Luo</p>
      <p className='p_opensans' style={{color:' #fff', fontSize: '18px'}}> Chef & Founder</p>
      <img src={images.sign}  alt='sign_image'/>

     </div>
    </div>
  </div>
);

export default Chef;
