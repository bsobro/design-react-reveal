
import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-track py-12 text-white">
      <div className="container mx-auto px-2 max-w-7xl">
        <div className='flex gap-2 items-center justify-center pb-6'>
          <div className='border border-white grow h-[1px] hidden md:block'></div>
          <p className="text-white text-xl text-center max-w-sm lg:max-w-7xl">Time Tracking & productivity metrics trusted by 112,000+ businesses</p>
          <div className='border border-white grow h-[1px] hidden md:block'></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center lg:gap-8 text-start mx-auto md:max-w-xl lg:max-w-7xl">
          <div className="p-4">
            <h3 className="text-5xl md:text-[3.5rem] mb-2">800k+</h3>
            <p className="text-lg md:text-2xl">Active Users</p>
          </div>
          
          <div className="p-4">
            <h3 className="text-5xl md:text-[3.5rem] mb-2">500k+</h3>
            <p className="text-lg md:text-2xl">Total Hours Tracked</p>
          </div>
          
          <div className="p-4">
            <h3 className="text-5xl md:text-[3.5rem] mb-2">500k+</h3>
            <p className="text-lg md:text-2xl">Tasks Completed</p>
          </div>
          
          <div className="p-4">
            <h3 className="text-5xl md:text-[3.5rem] mb-2">500k+</h3>
            <p className="text-lg md:text-2xl">Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
