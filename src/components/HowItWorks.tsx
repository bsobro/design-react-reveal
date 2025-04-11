
import React from 'react';
import { Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600">Monitor and track all your activities in real-time</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="TrackStuff Interface"
              className="w-full h-64 object-cover"
            />
            
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
              <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-track transition-colors duration-300">
                <Play className="h-6 w-6 text-track fill-current ml-1" />
              </button>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-track-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-track font-bold">1</span>
                </div>
                <h3 className="text-sm font-medium">Sign Up</h3>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-track-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-track font-bold">2</span>
                </div>
                <h3 className="text-sm font-medium">Create Projects</h3>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-track-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-track font-bold">3</span>
                </div>
                <h3 className="text-sm font-medium">Track Progress</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
