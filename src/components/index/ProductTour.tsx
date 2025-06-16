
import React from 'react';
import Tabs from './Tabs';

const ProductTour: React.FC = () => {
  return (
    <section className="py-4 bg-white" id="features">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Interactive Product Tour</h2>
          <p className="text-gray-600 mx-auto text-base sm:text-2xl">
          Take a close look at our software's key modules and functionalities.
          </p>
        </div>
        <Tabs />
      </div>      
    </section>
  );
};

export default ProductTour;
