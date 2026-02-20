import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { SubNavbar } from '../components/SubNavbar';
import { Footer } from '../components/Footer';

export const Root = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <SubNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
