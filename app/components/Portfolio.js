'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import arrowright from '../assets/arrowright.png';
import arrowleft from '../assets/arrowleft.png';
import '../styles/Portfolio.scss';


function Portfolio() {
  const scrollRef = useRef(null);               
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: 'smooth' }); 
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });   
    }
  };

  return (
    <section className='portfolio container' id='portfolio'>
      <h1>Our Awesome Portfolio</h1>

      <div className="portfolio-wrapper">           
        <button 
          className="carousel-arrow left" 
          onClick={scrollLeft}
          aria-label="Previous project"
        >
          <Image src={arrowleft} width={24} height={24} alt='arrow-left'/>
        </button>

        <div className='portfolio-flex' ref={scrollRef}>    
          <Image src={image1} width={384} height={301} alt='portfolio-image' className='top'    />
          <Image src={image2} width={384} height={301} alt='portfolio-image' className='center' />
          <Image src={image3} width={384} height={301} alt='portfolio-image' className='bottom' />
        </div>

        <button 
          className="carousel-arrow right" 
          onClick={scrollRight}
          aria-label="Next project"
        >
            <Image src={arrowright} width={24} height={24} alt='arrow-right'/>
        </button>
      </div>
    </section>
  );
}

export default Portfolio