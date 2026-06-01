import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slidesData = [
  {
    id: 1,
    tagline: "Fresh & Hot",
    title: "Stone Baked Pizza",
    description: "Handcrafted with premium cheese, fresh toppings, and authentic Italian flavor.",
    image: "/images/pizza2.png",
    alt: "Pizza"
  },
  {
    id: 2,
    tagline: "Grilled Perfection",
    title: "Juicy Signature Burgers",
    description: "Flame grilled patties layered with fresh ingredients and bold flavors.",
    image: "/images/burger.png",
    alt: "Burger"
  },
  {
    id: 3,
    tagline: "Golden Crunch",
    title: "Crispy French Fries",
    description: "Perfectly seasoned, crispy outside, fluffy inside—made to share.",
    image: "/images/fries.png",
    alt: "French Fries"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="slide active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', inset: 0, pointerEvents: 'auto' }}
        >
          <motion.div 
            className="hero-text active-text"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span>{slidesData[currentSlide].tagline}</span>
            <h1>{slidesData[currentSlide].title}</h1>
            <p>{slidesData[currentSlide].description}</p>
            <button className="hero-btn">Order Now</button>
          </motion.div>

          <motion.div 
            className="hero-image active-image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={slidesData[currentSlide].image} alt={slidesData[currentSlide].alt} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
