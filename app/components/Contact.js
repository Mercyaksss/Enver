import React from 'react'
import '../styles/Contact.scss';
import Image from 'next/image';
import add from '../assets/add.png';
import circle from '../assets/circle.png';


function Contact() {
  return (
    <section className='contact'>
        <div className='content'>
            <h1>Contact us for the service you want to use</h1>
            <button className='btn'>Contact Us</button>

            <Image
              src={add}
              width={64}
              height={64}
              alt='rectangle'
              className='add'
            />

            <Image
              src={circle}
              width={64}
              height={64}
              alt='circle'
              className='circle'
            />

        </div>  
    </section>
  )
}

export default Contact