
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Logo from './logo';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Link to="/">
                <Logo/>
              </Link>
            </div>
            <p className="text-gray-600 mb-4 text-lg max-w-md">
            Streamline your team’s productivity with our comprehensive time tracking and management solution.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target='_blank' className="text-gray-400 hover:text-track w-9 h-9 text-3xl">
                <i className='fi fi-brands-facebook'></i>
              </a>
              <a href="https://twitter.com" target='_blank' className="text-gray-400 hover:text-track w-9 h-9 text-3xl">
                <i className='fi fi-brands-twitter'></i>
              </a>
              <a href="https://instagram.com" target='_blank' className="text-gray-400 hover:text-track w-9 h-9 text-3xl">
                <i className='fi fi-brands-instagram'></i>
              </a>
              <a href="https://github.com" target='_blank' className="text-gray-400 hover:text-track w-9 h-9 text-3xl">
                <i className='fi fi-brands-github'></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-950 mb-4 border-b-2 border-gray-950 text-xl w-fit">Quick Link</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-track">Home</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-track">About Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-track">Articles</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-track">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-950 mb-4 border-b-2 border-gray-950 text-xl w-fit">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="#" target='_blank' className="text-gray-600 flex gap-3 items-center hover:text-track"><MapPin size={24}/> <span>Pokhara, Nepal</span></a></li>
              <li><a href="#" target='_blank' className="text-gray-600 flex gap-3 items-center hover:text-track"><Mail size={24}/> <span>info@trackstaff.com</span></a></li>
              <li><a href="#" target='_blank' className="text-gray-600 flex gap-3 items-center hover:text-track"><Phone size={24}/> <span>+977 9849292929</span></a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-950 mb-4 border-b-2 border-gray-950 text-xl w-fit">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-track">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-track">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-6">
          
            <p className="text-gray-500 md:mb-0 text-center">
              &copy; {new Date().getFullYear()} TrackStuff. All rights reserved.
            </p>
            
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
