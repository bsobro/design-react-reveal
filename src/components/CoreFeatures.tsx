
import React from 'react';
import { Clock, BarChart3, Calendar, Users, Target, List, Clock3, LayoutGrid } from 'lucide-react';

const features = [
  {
    icon: <Clock className="h-8 w-8 text-track" />,
    title: "Time Tracking",
    description: "Track hours spent on tasks and projects with precision"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-track" />,
    title: "Reports & Charts",
    description: "Visualize productivity and project progress with detailed analytics"
  },
  {
    icon: <Users className="h-8 w-8 text-track" />,
    title: "Multiple Team Members",
    description: "Add your entire team and track individual contributions"
  },
  {
    icon: <Calendar className="h-8 w-8 text-track" />,
    title: "Scheduling",
    description: "Plan your work with intelligent scheduling features"
  },
  {
    icon: <Target className="h-8 w-8 text-track" />,
    title: "Target Management",
    description: "Set and track goals with customizable targets and milestones"
  },
  {
    icon: <List className="h-8 w-8 text-track" />,
    title: "Task Management",
    description: "Organize tasks with priority levels and deadlines"
  },
  {
    icon: <Clock3 className="h-8 w-8 text-track" />,
    title: "Time Tracking",
    description: "Monitor hours spent on different projects and tasks"
  },
  {
    icon: <LayoutGrid className="h-8 w-8 text-track" />,
    title: "Dashboard",
    description: "Get a comprehensive overview of all your productivity metrics"
  }
];

const CoreFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Tracking Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock all the tools you need to boost productivity and track your progress
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="w-12 h-12 bg-track-light rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
