'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import '../styles/Portfolio.scss';

import arrowright from '../assets/arrowright.png';
import arrowleft from '../assets/arrowleft.png';


function Portfolio() {
  const scrollRef = useRef(null);               // ← add this

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: 'smooth' });  // adjust -300 as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });   // adjust 300 as needed
    }
  };

  return (
    <section className='portfolio container' id='portfolio'>
      <h1>Our Awesome Portfolio</h1>

      <div className="portfolio-wrapper">           {/* ← new wrapper for positioning arrows */}
        <button 
          className="carousel-arrow left" 
          onClick={scrollLeft}
          aria-label="Previous project"
        >
          <Image src={arrowleft} width={24} height={24} alt='arrow-left'/>
        </button>

        <div className='portfolio-flex' ref={scrollRef}>    {/* ← add ref here */}
          <Image src={image1} width={384} height={301} alt='portfolio-image' className='top'    />
          <Image src={image2} width={384} height={301} alt='portfolio-image' className='center' />
          <Image src={image3} width={384} height={301} alt='portfolio-image' className='bottom' />
          {/* add more projects later if you want real sliding */}
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