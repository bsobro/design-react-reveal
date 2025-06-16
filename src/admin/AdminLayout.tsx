import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar.tsx';
import AdminHeader from './AdminHeader.tsx';

const AdminLayout: React.FC = () => {
  return (
<div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader />

    <div className="flex h-[calc(100vh-75px)] bg-gray-100 mt-[75px]">
      {/* Sidebar */}
      <AdminSidebar />
      
      
        
        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-scroll bg-gray-200 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
