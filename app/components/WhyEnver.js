import React from 'react'
import Image from 'next/image'
import '../styles/WhyEnver.scss'
import BG  from '../assets/BG.png'


function WhyEnver() {
  return (
    <section className='why-enver container' id='about'>
      <div className='text whyenver'>
        <h1>Why Enver Is The Best Choice?</h1>
        <p>Watch this one minute video so you understand why you should use our services!</p>
      </div>
      
      <Image
        src={BG}
        width={1200}
        height={670}
        alt='video'
      />
    </section>
  )
}

export default WhyEnver