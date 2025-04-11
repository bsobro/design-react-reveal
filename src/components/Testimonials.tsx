
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "TrackStuff has transformed how our team works together. We've increased productivity by 35% in just two months.",
    author: "Sarah Johnson",
    position: "Project Manager, TechFlow Inc.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The customizable workflows and time tracking features have been game-changers for our remote team.",
    author: "Michael Chen",
    position: "CTO, StartupGenius",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "After trying several productivity tools, TrackStuff is the only one that met all our needs and was easy to implement.",
    author: "Emily Rodriguez",
    position: "Operations Director, Global Solutions",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Teams Worldwide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of teams that rely on TrackStuff to boost their productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5" 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
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
