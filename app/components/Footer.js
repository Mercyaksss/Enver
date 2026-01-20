import React from 'react';
import Image from 'next/image';
import '../styles/Footer.scss';
import logo from '../assets/logo.png';


function Footer() {
  return (
    <section className='footer container'>
        
        <Image
            src={logo}
            width={132}
            height={40}
            alt='logo'
        />

        <ul>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
        </ul>

        <p>© 2020 Enver, All Rights Reserved</p>
    </section>
  )
}

export default Footer