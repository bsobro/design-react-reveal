
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-8 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <svg className="w-8 h-8 text-track" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M12 17l5-5h-3V7h-4v5H7l5 5z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">TrackStuff</span>
            </a>
            
            <nav className="hidden md:flex ml-10">
              <ul className="flex space-x-8">
                <li><a href="#features" className="text-gray-600 hover:text-track">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-track">How it Works</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-track">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-600 hover:text-track">Testimonials</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-gray-600 hover:text-track">Log in</a>
            <Button className="bg-track hover:bg-track-dark">Sign Up Free</Button>
          </div>
          
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li><a href="#features" className="text-gray-600 hover:text-track block py-2">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-track block py-2">How it Works</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-track block py-2">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-600 hover:text-track block py-2">Testimonials</a></li>
              </ul>
            </nav>
            <div className="mt-4 flex flex-col space-y-4">
              <a href="#login" className="text-gray-600 hover:text-track py-2">Log in</a>
              <Button className="bg-track hover:bg-track-dark w-full">Sign Up Free</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
