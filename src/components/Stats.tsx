
import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="stats-gradient py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-4xl font-bold mb-2">800k+</h3>
            <p className="text-track-light">Active Users</p>
          </div>
          
          <div className="p-4">
            <h3 className="text-4xl font-bold mb-2">500k+</h3>
            <p className="text-track-light">Teams</p>
          </div>
          
          <div className="p-4">
            <h3 className="text-4xl font-bold mb-2">500k+</h3>
            <p className="text-track-light">Projects Managed</p>
          </div>
          
          <div className="p-4">
            <h3 className="text-4xl font-bold mb-2">500k+</h3>
            <p className="text-track-light">Hours Tracked</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
