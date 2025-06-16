import React from 'react';
import Logo from '../components/logo';
import NotificationDropdown from './Navigation/Notification';
import UserProfileHeader from './Navigation/UserProfileHeader';
import MenuOffcanvas from './Navigation/Menu/MenuOffcanvas';

const AdminHeader: React.FC = () => {

  return (
    <header className="bg-white p-4 flex justify-between items-center fixed top-0 left-0 right-0">
      <div className="flex items-center ">
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        <NotificationDropdown />
        <UserProfileHeader />
        <MenuOffcanvas />
      </div>
    </header>
  );
};

export default AdminHeader;
