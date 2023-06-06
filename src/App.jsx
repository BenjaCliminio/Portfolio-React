import React from 'react';
import Analytics from './Components/Analytics';
import CardsSection from './Proyects/CardsSection';
import Footer from './Components/Footer';
import Hero from './components/Hero';
import Navbar from './Layouts/Navbar';
import Newsletter from './Components/NewSletter';

function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <CardsSection />
      <Footer />
    </div>
  );
}

export default App;