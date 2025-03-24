import { useState } from "react";
import {
  FiHome,
  FiFileText,
  FiUsers,
  FiSettings,
  FiClock,
  FiChevronDown,
} from "react-icons/fi";
import Equity from "../assets/equity.png";
import Escrow from "../assets/escrow.png";

const Sidebar = () => {
  const [isPayrollOpen, setIsPayrollOpen] = useState(false);

  return (
    <div className="lg:w-[190px] sm:[90px] h-full border-r-[#ffffff] bg-[#191919] font-[Mansfield] font-medium text-[11px] leading-[100%] tracking-[0%] text-center p-4 text-white">
      <nav className="mt-[75px]">
        <ul className="space-y-6">
          <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
            <FiHome /> Dashboard
          </li>
          <li className="flex items-center justify-between text-gray-400 hover:text-white cursor-pointer">
            <div className="flex items-center gap-3">
              <FiFileText /> Invoice
            </div>
            <span className="text-xs bg-[#800080] px-2 rounded-full font-mansfield font-medium italic text-[9px] leading-none tracking-normal text-right">
              Coming Soon
            </span>
          </li>
          <li>
            <div
              className="flex items-center justify-between text-gray-400 hover:text-white cursor-pointer"
              onClick={() => setIsPayrollOpen(!isPayrollOpen)}
            >
              <div className="flex items-center gap-3">
                <FiUsers /> Payroll & Expenses
              </div>
              <FiChevronDown
                className={`transform transition-transform ${isPayrollOpen ? "rotate-180" : ""}`}
              />
            </div>
            {isPayrollOpen && (
              <ul className="pl-6 mt-2 space-y-2">
                <li className="text-gray-400 hover:text-white cursor-pointer">
                  Payroll
                </li>
                <li className="text-white bg-[linear-gradient(89.97deg,_#800080_-28.95%,_rgba(115,115,115,0)_99.97%)] p-2 rounded-lg cursor-pointer">
                  Employees
                </li>
              </ul>
            )}
          </li>
          <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
            <FiSettings /> Settings
          </li>
          <li className="flex items-center justify-between text-gray-400 hover:text-white cursor-pointer">
            <div className="flex items-center gap-3">
              <img src={Escrow} alt="" />
              Escrow
            </div>
            <span className="text-xs bg-[#800080] px-2 rounded-full font-mansfield font-medium italic text-[9px] leading-none tracking-normal text-right">
              Coming Soon
            </span>
          </li>
          <li className="flex items-center justify-between text-gray-400 hover:text-white cursor-pointer">
            <div className="flex items-center gap-3">
              <img src={Equity} alt="" />
              Equity
            </div>
            <span className="text-xs bg-[#800080] px-2 rounded-full font-mansfield font-medium italic text-[9px] leading-none tracking-normal text-right">
              Coming Soon
            </span>
          </li>
          <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
            <FiClock /> Transaction History
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
