import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../components/SideBar";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import Header from "../components/Header";
import Add from "../assets/add.png";
import Import from "../assets/import.png";
import CustomButton from "../components/CustomButton";

export default function EmployeeDashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex md:flex-row h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 p-4 md:p-6 w-full overflow-auto">
        <div className="flex justify-end mb-6">
          <Header />
        </div>

        {/* Title and Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <h1 className="text-xl md:text-2xl font-semibold">Employee</h1>
          <div className="flex flex-wrap gap-3">
            <button className="bg-black border-white/30 border px-4 py-2 gap-2 rounded flex items-center text-sm">
              <img src={Import} alt="Import" className="w-4 h-4" />
              Import CSV
            </button>
            <button className="bg-black border-white/30 border px-4 py-2 gap-2 rounded flex items-center text-sm">
              <img src={Add} alt="Add" className="w-4 h-4" />
              Add Employee
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex md:flex-row items-center gap-3 w-full">
          <div className="flex w-full md:w-[520px] h-[40px] bg-black border border-[#FFFFFF1A] px-3 py-1 rounded">
            <FiSearch className="text-white mt-2" />
            <input
              type="text"
              placeholder="Search employees, name, email address or wallet address"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-white w-full px-3 focus:outline-none"
            />
          </div>
          <div className="w-full md:w-auto">
            <CustomButton />
          </div>
        </div>

        <div className="bg-black mt-4 rounded-lg overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-[#191919] text-xs md:text-sm">
                <th className="py-2 px-3 md:py-3 md:px-6">Name</th>
                <th className="py-2 px-3 md:py-3 md:px-6">Department</th>
                <th className="py-2 px-3 md:py-3 md:px-6">Job Title</th>
                <th className="py-2 px-3 md:py-3 md:px-6">Email address</th>
                <th className="py-2 px-3 md:py-3 md:px-6"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-t-0 border-white/5 text-xs md:text-sm">
                <td className="py-2 px-3 md:py-3 md:px-6">Kelsie Butcher</td>
                <td className="py-2 px-3 md:py-3 md:px-6">
                  Design & Marketing
                </td>
                <td className="py-2 px-3 md:py-3 md:px-6">UI Designer</td>
                <td className="py-2 px-3 md:py-3 md:px-6">
                  dutchkelsie@yahoo.com
                </td>
                <td className="py-2 flex justify-end gap-2">
                  <img
                    src={Edit}
                    alt="Edit"
                    className="cursor-pointer w-4 md:w-5 h-4 md:h-5"
                  />
                  <img
                    src={Delete}
                    alt="Delete"
                    className="cursor-pointer w-4 md:w-5 h-4 md:h-5"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
