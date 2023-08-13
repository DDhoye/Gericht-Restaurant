import React from 'react';
import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G-overlay'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Gericht Nairobi Upper Hill, where culinary
         artistry meets the modern elegance of Nairobi's skyline. Nestled in the heart 
         of the prestigious Upper Hill district, Gericht is more than just a restaurant; 
         it's a harmonious symphony of flavors, cultures, and breathtaking views.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Nestled within the vibrant pulse of Nairobi's
         prestigious Upper Hill district, Gericht Restaurant has been an icon of
          culinary excellence since its inception. Established in 2017 by visionary 
          chef Kevin Luo, Gericht quickly became a culinary destination that
           seamlessly blends refined gastronomy with the breathtaking backdrop of the 
           city's modern skyline. </p>
        <button type="button" className="custom__button">Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
