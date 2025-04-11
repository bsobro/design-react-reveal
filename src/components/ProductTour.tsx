
import React from 'react';

const ProductTour: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Product Tour</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a closer look at how TrackStuff helps teams manage their productivity and workflows.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border border-gray-100">
            <img 
              src="/lovable-uploads/74375c66-4f95-4206-9f93-b28ea1c0007e.png" 
              alt="TrackStuff Dashboard Preview" 
              className="object-cover w-full h-full"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-track transition-colors duration-300">
                <svg className="w-10 h-10 text-track" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-6">
            <button className="px-4 py-2 text-sm rounded-full border border-gray-200 hover:border-track hover:bg-track-light transition-all text-gray-600 hover:text-track">
              Dashboard Tour
            </button>
            <button className="px-4 py-2 text-sm rounded-full border border-gray-200 hover:border-track hover:bg-track-light transition-all text-gray-600 hover:text-track">
              Feature Overview
            </button>
            <button className="px-4 py-2 text-sm rounded-full border border-gray-200 hover:border-track hover:bg-track-light transition-all text-gray-600 hover:text-track">
              Customer Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;
