import Image from 'next/image';
import '../styles/NavBar.scss';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';


export default function NavBar() {
    return(
        <nav>
            <Image
                src={logo}
                width={120}
                height={40}
                alt='logo'
            />

            <ul className='nav-links'>
                <li>Home</li>
                <li>Services</li>
                <li>Our Project</li>
                <li>About Us</li>
            </ul>

            <button className='nav-btn'>Contact Us</button>

            <Image 
                src={menu}
                width={24}
                height={24}
                alt='menu'
                className='menu-icon'
            />
        </nav>
    );
}