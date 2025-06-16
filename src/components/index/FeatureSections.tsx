
import React from 'react';
import { Button } from "@/components/ui/button";

const FeatureSections: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Comprehensive Tracking Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Comprehensive Tracking Features</h2>
            <p className="text-gray-600 mx-auto max-w-5xl text-base sm:text-2xl">
            Advanced tools designed to enhance productivity, streamline workflows, and provide deep insights into your team's performance.
            </p>
          </div>
        
      
          <div className="flex flex-col md:flex-row items-center gap-x-12 gap-y-4 mb-4">
            <div className="md:w-1/2">
              <div className="flex -space-x-4">
                <div className="w-full">
                  <img src="./img/track-1.png" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Create Projects & Collaborate</h3>
              <p className="text-gray-600 text-base md:text-lg lg:text-2xl text-justify">
              Create as many projects as you need and organize them into folders. Invite teammates and external partners—such as clients or freelancers—to collaborate seamlessly. Track Staff makes project sharing and team collaboration effortless.</p>
              
            </div>
          </div>
        
          <div className="flex flex-col-reverse md:flex-row items-center gap-x-12 gap-y-4 mb-4">
            <div className="md:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Schedule & Assign Tasks</h3>
              <p className="text-gray-600 text-base md:text-lg lg:text-2xl text-justify">
              Ditch overwhelming to-do lists. Schedule your team’s tasks and meetings on specific days with a dynamic, easy-to-use calendar. Each day is planned out with clear, actionable items to maximize productivity.
              </p>
              
            </div>
            <div className="md:w-1/2">
              <img 
                src="./img/track-2.jpeg" 
                alt="Schedule and assign tasks" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        
          <div className="flex flex-col md:flex-row items-center gap-x-12 gap-y-4 mb-4">
            <div className="md:w-1/2">
              <img 
                src="./img/track-3.jpeg" 
                alt="Customize workflow" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Customize Your Workflow</h3>
              <p className="text-gray-600 text-base md:text-lg lg:text-2xl text-justify">
                Tailor TrackStuff to fit your exact needs. Create custom fields, design your project views, and configure automations to match your team's unique workflows.
              </p>
              
            </div>
          </div>
        
          <div className="flex flex-col-reverse md:flex-row items-center gap-x-12 gap-y-4 mb-4">
            <div className="md:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Comprehensive Team Dashboard</h3>
              <p className="text-gray-600 text-base md:text-lg lg:text-2xl text-justify">
                Get a birds-eye view of your entire team's performance with our intuitive dashboard. Monitor productivity metrics, track project progress, and identify bottlenecks at a glance.
              </p>
              
            </div>
            <div className="md:w-1/2">
              <img 
                src="./img/track-4.jpeg" 
                alt="Team dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        
          <div className="flex flex-col md:flex-row items-center gap-x-12 gap-y-4 mb-4">
            <div className="md:w-1/2">
              <img 
                src="./img/track-5.jpeg" 
                alt="Time tracking insights" 
                className="w-full h-full object-cover"
              />
            
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Time Tracking & Productivity Insights</h3>
              <p className="text-gray-600 text-base md:text-lg lg:text-2xl text-justify">
                Accurately track time spent on each task and generate detailed reports. Identify productivity trends and optimize your team's workflow based on data-driven insights.
              </p>
              
            </div>
          </div>
        
          <div className="flex flex-col-reverse md:flex-row items-center gap-x-12 gap-y-4 mb-4">
            <div className="md:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Enhanced Collaboration Tools</h3>
              <p className="text-gray-600 text-base md:text-lg lg:text-2xl text-justify">
                Foster team communication with built-in chat, file sharing, and commenting features. Keep all project-related discussions organized and accessible in one place.
              </p>
              
            </div>
            <div className="md:w-1/2">
              <img 
                src="./img/track-6.jpeg" 
                alt="Collaboration tools" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSections;
