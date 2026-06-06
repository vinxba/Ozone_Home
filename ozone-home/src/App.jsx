import React from 'react';
import Navbar from './components/Navbar';
import FlashSale from './components/FlashSale';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import BestDeals from './components/BestDeals';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <FlashSale />
      <Hero />
      <Features />
      <Categories />
      <BestDeals />
      <HowItWorks />
      <Impact />
      <Testimonials />
      <FooterCTA />
      <Footer />
    </div>
  );
}
