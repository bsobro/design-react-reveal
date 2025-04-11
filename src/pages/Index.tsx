
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductTour from '@/components/ProductTour';
import HowItWorks from '@/components/HowItWorks';
import CoreFeatures from '@/components/CoreFeatures';
import FeatureSections from '@/components/FeatureSections';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductTour />
        <HowItWorks />
        <CoreFeatures />
        <FeatureSections />
        <Testimonials />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
