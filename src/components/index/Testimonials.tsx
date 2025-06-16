
import React from 'react';
import { MessageSquareText  } from 'lucide-react';

const testimonials = [
  {
    quote: "TrackStaff has transformed how we manage our remote team. The productivity insights are invaluable, and the automated time tracking has saved us countless administrative hours.",
    author: "Sarah Johnson",
    position: "Project Manager, TechFlow Inc.",
    
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The integration with our accounting software is seamless. Payroll that used to take days now takes minutes. I can't imagine running our agency without TrackStaff.",
    author: "Michael Chen",
    position: "CTO, StartupGenius",
    
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As a growing startup, we needed a scalable solution for time tracking. TrackStaff provided exactly what we needed with their intuitive interface and powerful reporting tools.",
    author: "Emily Rodriguez",
    position: "Operations Director, Global Solutions",
    
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16" id="testimonials">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Teams Worldwide</h2>
          <p className="text-gray-600 max-w-5xl mx-auto text-base sm:text-2xl">
          See what our customers say about how TrackStaff has improved their team productivity and management.  </p>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap justify-center max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div key={index} className="flex flex-col bg-white rounded-xl shadow-lg p-6 mx-auto border border-gray-200 w-full h-full">
              <div className="text-track mb-4">
                <MessageSquareText  
                  size={40} 
                />
              </div>
              
              <p className="text-gray-900 mb-6 text-base sm:text-lg grow">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-track">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm sm:text-base">{testimonial.position}</p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
