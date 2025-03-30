import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../components/SideBar";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import Header from "../components/Header";
import Add from "../assets/add.png";
import Import from "../assets/import.png";
import CustomButton from "../components/CustomButton";
import { IoClose } from "react-icons/io5"; 

export default function EmployeeDashboard() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  const handleNext = () => {
    if (modalStep === 1) setModalStep(2); // From Employee Details to Payment Details
    else if (modalStep === 2) setModalStep(3); // From Payment Details to Confirmation
  };

  const handleBack = () => {
    if (modalStep === 2) setModalStep(1); 
    else if (modalStep === 3) setModalStep(2); 
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setModalStep(1); 
  };

  const handleFinalSubmit = () => {
    console.log("Employee data submitted!");
    handleClose(); // Close modal after submission
  };

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
            <button
              className="bg-black border-white/30 border px-4 py-2 gap-2 rounded flex items-center text-sm"
              onClick={() => setIsModalOpen(true)} // Open modal
            >
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

        {/* Table */}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <div className="bg-[#111] text-white border border-white/20 rounded-lg p-6 w-[90%] md:w-[400px] relative">
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={handleClose} // Close modal
            >
              <IoClose />
            </button>

            {/* Step 1: Employee Details */}
            {modalStep === 1 && (
              <>
                <h2 className="text-center text-lg font-semibold mb-4">
                  Employee Details
                </h2>
                <div className="flex flex-col gap-4 h-full">
                  <input
                    type="text"
                    placeholder="Employee's name"
                    className="bg-[#191919] text-white p-3 rounded-lg border border-white/20 focus:outline-none w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="bg-[#191919] text-white p-3 rounded-lg border border-white/20 focus:outline-none w-full"
                  />
                  <div className="flex-grow"></div>
                  <div className="flex justify-end">
                    <button
                      className="w-[80px] h-[40px] bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:opacity-80 transition-all duration-300"
                      onClick={handleNext} // Move to Payment Details
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Step 2: Payment Details */}
            {modalStep === 2 && (
              <>
                <h2 className="text-center text-lg font-semibold mb-4">
                  Payment Details
                </h2>
                <div className="flex flex-col gap-4 h-full">
                  <div className="w-[433px] flex mb-4">
                    <button className="w-[172.5px] h-[40px] bg-gray-500 text-white border border-white/20 focus:outline-none">
                      Crypto
                    </button>
                    <button className="w-[172.5px] h-[40px] bg-black-200 text-white border border-white/20 focus:outline-none opacity-50">
                      FIAT <span className="text-xs text-gray-400 bg-[#800080]">(Coming soon)</span>
                    </button>
                  </div>
                  <div className="relative">
                    <select
                      className="w-full h-[40px] bg-[#191919] text-white rounded-lg border border-white/20 focus:outline-none appearance-none p-3"
                    >
                      <option value="starknet">Starknet</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Employee's wallet address"
                    className="bg-[#191919] text-white p-3 rounded-lg border border-white/20 focus:outline-none w-full"
                  />
                  <div className="flex-grow"></div>
                  <div className="flex justify-between">
                    <button
                      className="w-[80px] h-[40px] bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                      onClick={handleBack} 
                    >
                      Back
                    </button>
                    <button
                      className="w-[80px] h-[40px] bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:opacity-80 transition-all duration-300"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Step 3: Confirmation */}
            {modalStep === 3 && (
              <>
                <h2 className="text-center text-lg font-semibold mb-4">
                  More details
                </h2>
                <div className="flex flex-col gap-4 h-full">
                  <input
                    type="text"
                    placeholder="Employee's job title"
                    className="bg-[#191919] text-white p-3 rounded-lg border border-white/20 focus:outline-none w-full"
                  />
                  <input
                    type="email"
                    placeholder="employee's department"
                    className="bg-[#191919] text-white p-3 rounded-lg border border-white/20 focus:outline-none w-full"
                  />
                  <div className="flex-grow"></div>
                  <div className="flex justify-between">
                    <button
                      className="w-[80px] h-[40px] bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button
                      className="w-[80px] h-[40px] bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:opacity-80 transition-all duration-300"
                      onClick={handleFinalSubmit} // Save and close
                    >
                      Save
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}