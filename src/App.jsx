import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Stats from './components/Stats';
import Services from './components/Services';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  // Set initial direction
  React.useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <Services />
      <FAQ />
      <About />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
