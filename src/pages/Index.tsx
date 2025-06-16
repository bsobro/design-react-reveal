
import Hero from '@/components/index/Hero';
import ProductTour from '@/components/index/ProductTour';
import HowItWorks from '@/components/index/HowItWorks';
import CoreFeatures from '@/components/index/CoreFeatures';
import FeatureSections from '@/components/index/FeatureSections';
import Testimonials from '@/components/index/Testimonials';
import Stats from '@/components/index/Stats';


const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <Hero />
        <ProductTour />
        <HowItWorks />
        <CoreFeatures />
        <FeatureSections />
        <Testimonials />
        <Stats />
      </main>
      
    </div>
  );
};

export default Index;
