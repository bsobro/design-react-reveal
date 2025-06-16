import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Offcanvas from './chat/Offcanvas';
import { Toaster } from './ui/toaster';
import ScrollToTop from './ScrollToTop';

const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Offcanvas />
    </div>
  );
};

export default RootLayout;
