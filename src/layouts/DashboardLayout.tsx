import React from 'react';
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <section className='h-screen grid grid-rows-[auto_1fr]'>
      <Topbar />
      <article className='grid grid-cols-12 h-full'>
        <div className='hidden md:block md:col-span-2 h-full'>
          <Sidebar />
        </div>
        <div className='col-span-full md:col-span-10 h-full'>
          {children}
        </div>
      </article>
    </section>
  );
};

export default DashboardLayout;
