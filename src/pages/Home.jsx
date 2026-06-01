import HeroSlider from '../components/HeroSlider/HeroSlider';
import Menu from '../components/Menu/Menu';
import Reservation from '../components/Reservation/Reservation';
import Contact from '../components/Contact/Contact';
import Designer from '../components/Designer/Designer';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Menu />
      <Reservation />
      <Contact />
      <Designer />
      <Footer />
    </>
  );
}
