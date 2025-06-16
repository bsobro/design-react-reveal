
import React from 'react';
import { Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">How It Works</h2>
        <p className="text-gray-600 mx-auto text-base sm:text-2xl">TrackStaff explained  in just few minutes.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="TrackStuff Interface"
              className="w-full aspect-video object-cover"
            />
            
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
              <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300">
                <Play className="h-6 w-6 text-track fill-current ml-1" />
              </button>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
