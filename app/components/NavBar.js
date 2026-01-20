'use client';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/NavBar.scss';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import { useState } from 'react';
import SliderMenu from './SliderMenu';


export default function NavBar() {
    const [ismenuopen, setIsmenuopen] = useState(false);

    return(
        <nav>
            <Image
                src={logo}
                width={120}
                height={40}
                alt='logo'
            />

            <ul className='nav-links'>
                <Link href='#home'><li>Home</li></Link>
                <Link href='#services'><li>Services</li></Link>
                <Link href='#portfolio'><li>Our Project</li></Link>
                <Link href='#about'><li>About Us</li></Link> 
            </ul>

            <button className='nav-btn'>Contact Us</button>

            <Image 
                src={menu}
                width={24}
                height={24}
                alt='menu'
                className={`menu-icon ${ismenuopen ? 'hide' : ''}`}   
                onClick={() => (setIsmenuopen (!ismenuopen))}
            />

            {ismenuopen && <SliderMenu onClose={() => setIsmenuopen(false)} />}
        </nav>
    );
}