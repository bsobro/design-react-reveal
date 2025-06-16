
import React from 'react';
import { Keyboard, Mouse, MousePointer , Camera, Clock5, FileText, FolderClosed, ListChecks, MessageCircle  } from 'lucide-react';

const features = [
  {
    icon: <Keyboard size={24} className="text-track" />,
    title: "Key Pressed Tracking",
    description: "Monitor Keystrokes to track productivity levels."
  },
  {
    icon: <Mouse size={24} className="text-track" />,
    title: "Mouse Clicks",
    description: "Track mouse activity for detailed productivity insights."
  },
  {
    icon: <MousePointer size={24} className="text-track" />,
    title: "Mouse Movements",
    description: "Analyze mouse movement patterns to understand work habits."
  },
  {
    icon: <Camera size={24} className="text-track" />,
    title: "Screenshots",
    description: "Capture periodic screenshots for work verification."
  },
  {
    icon: <Clock5 size={24} className="text-track" />,
    title: "Attendance",
    description: "Track employee attendance and time reports."
  },
  {
    icon: <FileText size={24} className="text-track" />,
    title: "Activity Logs",
    description: "Comprehensive activity tracking and reporting."
  },
  {
    icon: <FolderClosed size={24} className="text-track" />,
    title: "Project Management",
    description: "Create and assign projects to team members."
  },
  {
    icon: <ListChecks size={24} className="text-track" />,
    title: "Task Management",
    description: "Create, assign and track tasks within projects."
  },
  {
    icon: <MessageCircle size={24} className="text-track" />,
    title: "Team Chat",
    description: "Project-specific communication with task mentions."
  }
];

const CoreFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Core Tracking Features</h2>
          <p className="text-gray-600 mx-auto text-base sm:text-2xl">
          Comprehensive tracking tools designed to maximize productivity and
          streamline your workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card shadow-md">
              <div className="w-[60px] h-[50px] bg-track-light rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
