import './globals.scss';
import HeroSection from './components/HeroSection';
import WhyEnver from './components/WhyEnver';
import OurServices from './components/OurServices';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <section>
      <HeroSection/>
      <WhyEnver/>
      <OurServices/>
      <Portfolio/>
    </section>
  );
}