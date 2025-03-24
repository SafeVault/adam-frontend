import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

import importIcon from '@/assets/payrollAsset/importIcon.svg'
import createIcon from '@/assets/payrollAsset/createIcone.svg'

import PayrollStats from "@/components/Payroll/PayrollStats";
import FilterComponent from "@/components/Payroll/Filter";
import PayrollTable from "@/components/Payroll/PayrollTable";

export default function Payroll() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="p-4 md:p-6">
        {/* Title and Actions Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="font-medium text-[30px] text-white mb-3 md:mb-0">Payroll</h1>
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <Button className="flex items-center gap-2 bg-transparent border cursor-pointer border-gray-700 text-white">
              <img src={createIcon} height={16} width={16} alt={'import'} />
              Import CSV
            </Button>
            <Button
              className="flex items-center gap-2 bg-transparent border cursor-pointer border-gray-700 text-white"
              onClick={() => setShowModal(true)}
            >
              <img src={importIcon} height={16} width={16} alt={'import'} />
              Create Payroll
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <PayrollStats />

        {/* Filters */}
        <FilterComponent />

        {/* Table */}
        <PayrollTable />
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-10">
          <div className="bg-[#121212] w-full max-w-md rounded-md p-6 relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium mx-auto ">Add Payroll</h2>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:bg-gray-800 rounded-full absolute top-4 right-4"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <select className="w-full bg-[#1A1A1A] border border-gray-800 rounded text-white px-3 py-2 appearance-none cursor-pointer">
                    <option value="">Employee</option>
                    <option value="">Investors</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <Input
                  type="text"
                  className="w-full min-h-[105px] bg-[#1A1A1A] border border-gray-800 rounded text-white"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Amount"
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded text-white"
                />
              </div>

              <div className="pt-4 w-full relative h-[40px]">
                <Button
                  onClick={() => setShowModal(false)}
                  className="h-[40px] absolute right-0 top-0 min-w-[146px] bg-gradient-to-r from-[#1A001A] to-[#800080] rounded-sm hover:cursor-pointer hover:bg-gradient-to-r hover:to-[#1A001A] hover:from-[#800080] text-white "
                >
                  Add Payroll
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
