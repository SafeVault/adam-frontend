import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from 'react-router-dom';


function DashboardLayout() {
  return (
    <section className='h-full grid grid-cols-12 custom-bg'>
      <div className="hidden md:block md:col-span-2">
        <Sidebar />
      </div>
      <article className='col-span-full md:col-span-10 h-full '>
        <Topbar />
        <Outlet />
      </article>
    </section>
  );
};

export default DashboardLayout;
