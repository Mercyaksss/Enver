import React from 'react';
import Image from 'next/image';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import '../styles/Portfolio.scss';

function Portfolio() {
  return (
   <section className='portfolio container' id='portfolio'> 
   <h1>Our Awesome Portfolio</h1>

   <div className='portfolio-flex'>

    <Image
        src={image1}
        width={384}
        height={301}
        alt='portfolio-image'
        className='top'
    />

    <Image
        src={image2}
        width={384}
        height={301}
        alt='portfolio-image'
        className='center'
    />

    <Image
        src={image3}
        width={384}
        height={301}
        alt='portfolio-image'
        className='bottom'
    />

   </div>
   
   </section>
  )
}

export default Portfolio