import './globals.scss';
import Image from 'next/image';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Rectangle1 from './assets/Rectangle1.png';
import Rectangle2 from './assets/Rectangle2.png';
import Rectangle3 from './assets/Rectangle3.png';
import Rectangle4 from './assets/Rectangle4.png';
import Rectangle5 from './assets/Rectangle5.png';


export const metadata = {
  title: 'Enver',
  description: 'Build Your Awesome Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Image src={Rectangle1} width={1300} height={1233} alt='orb' className='orb-1 orb'/>
        <Image src={Rectangle2} width={1200} height={1400} alt='orb' className='orb-2 orb'/>
        <NavBar />
        <Image src={Rectangle3} width={2000} height={2774} alt='orb' className='orb-3 orb'/>
        <Image src={Rectangle4} width={600} height={900} alt='orb' className='orb-4 orb'/>
        <Image src={Rectangle5} width={1000} height={1500} alt='orb' className='orb-5 orb'/>
        <main>{children}</main>
        <Contact/>
        <Footer/>
      </body>
    </html>
  );
}