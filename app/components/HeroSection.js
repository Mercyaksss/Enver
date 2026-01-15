import Image from 'next/image';
import '../styles/HeroSection.scss';
import heroimage from '../assets/heroimage.png';
import arrow from '../assets/arrow.png'


function HeroSection() {
    return(
        <section className='hero container'>
            <div className='hero-left'>
                <h1>Build Your Awesome Platform</h1>
                <p className='hero-p'>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
                <button className='hero-btn btn'>
                    Our Services

                    <Image
                        src={arrow}
                        width={24}
                        height={24}
                        alt='arrow'                
                    />
                </button>       
            </div>

            <div className='hero-right'>
                <Image
                    src={heroimage}
                    width={770}
                    height={650}
                    alt='hero-image'
                />
            </div>
        </section>
    );
}

export default HeroSection