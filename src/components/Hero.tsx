
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Monitor Every Aspect of </span>
            <span className="text-track">Productivity</span>
            <span className="text-gray-900"> with TrackStuff</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track deadlines, manage tasks, collaborate with your team, and boost your productivity.
            Stay on top of projects with our all-in-one productivity solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-track hover:bg-track-dark text-white px-8 py-6 text-lg h-auto">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-6 text-lg h-auto">
              <span>Book a Demo</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-gray-500">
            <p>No credit card required • Free 14-day trial • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
