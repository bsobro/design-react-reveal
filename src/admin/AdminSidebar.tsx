import React from 'react';
import MenuLinks from './Navigation/Menu/MenuLinks';

const AdminSidebar: React.FC = () => {


  return (
    <div className="w-[250px] bg-white shadow-md hidden md:block overflow-y-auto">
      <nav className="py-0">
        <MenuLinks />
      </nav>
    </div>
  );
};

export default AdminSidebar;
