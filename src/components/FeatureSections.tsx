
import React from 'react';
import { Button } from "@/components/ui/button";

const FeatureSections: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Comprehensive Tracking Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Tracking Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to monitor and optimize your team's productivity across all projects
            </p>
          </div>
        </div>
      </section>

      {/* Create Projects & Collaborate */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex -space-x-4">
                <div className="w-24 h-24 rounded-full bg-yellow-200 overflow-hidden border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 rounded-full bg-blue-200 overflow-hidden border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 rounded-full bg-pink-200 overflow-hidden border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 rounded-full bg-purple-200 overflow-hidden border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Team Member" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Create Projects & Collaborate</h3>
              <p className="text-gray-600 mb-6">
                Bring your team together to work on shared projects. Assign tasks, track progress, and collaborate in real-time to achieve your objectives more efficiently.
              </p>
              <Button className="bg-track hover:bg-track-dark text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Assign Tasks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Schedule & Assign Tasks</h3>
              <p className="text-gray-600 mb-6">
                Plan your team's workload with our intuitive scheduling interface. Drag and drop tasks to the right team members, set deadlines, and ensure balanced workloads for maximum productivity.
              </p>
              <Button className="bg-track hover:bg-track-dark text-white">Learn More</Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1574108233889-7e314c8ca86c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Schedule and assign tasks" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customize Your Workflow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Customize workflow" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Customize Your Workflow</h3>
              <p className="text-gray-600 mb-6">
                Tailor TrackStuff to fit your exact needs. Create custom fields, design your project views, and configure automations to match your team's unique workflows.
              </p>
              <Button className="bg-track hover:bg-track-dark text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Team Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Comprehensive Team Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Get a birds-eye view of your entire team's performance with our intuitive dashboard. Monitor productivity metrics, track project progress, and identify bottlenecks at a glance.
              </p>
              <Button className="bg-track hover:bg-track-dark text-white">Learn More</Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team dashboard" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Time Tracking & Productivity Insights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Time tracking insights" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Time Tracking & Productivity Insights</h3>
              <p className="text-gray-600 mb-6">
                Accurately track time spent on each task and generate detailed reports. Identify productivity trends and optimize your team's workflow based on data-driven insights.
              </p>
              <Button className="bg-track hover:bg-track-dark text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Collaboration Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Enhanced Collaboration Tools</h3>
              <p className="text-gray-600 mb-6">
                Foster team communication with built-in chat, file sharing, and commenting features. Keep all project-related discussions organized and accessible in one place.
              </p>
              <Button className="bg-track hover:bg-track-dark text-white">Learn More</Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Collaboration tools" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSections;
