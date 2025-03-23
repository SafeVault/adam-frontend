import { useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../ui/table';
import { Search, ChevronDown } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'Deposit' | 'Withdraw';
  date: string;
  amount: string;
  from: string;
  to: string;
  department: string;
  status: 'Successful' | 'Failed' | 'Pending';
}

// Mock transaction data
const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'Deposit',
    date: '02 September, 2023',
    amount: '$2,458.663 BB',
    from: '0x48...7xv63',
    to: '0x5F...8w16f',
    department: 'Marketing',
    status: 'Successful'
  },
  {
    id: '2',
    type: 'Withdraw',
    date: '02 September, 2023',
    amount: '$2,458.663 BB',
    from: '0x78...9xv74',
    to: '0x9F...7v43d',
    department: 'Marketing',
    status: 'Failed'
  },
  {
    id: '3',
    type: 'Deposit',
    date: '02 September, 2023',
    amount: '$2,458.663 BB',
    from: '0x63...4xv12',
    to: '0x2F...5a08e',
    department: 'Marketing',
    status: 'Pending'
  }
];

export const TransactionHistory = () => {
  const [transactions] = useState<Transaction[]>(mockTransactions);

  // Custom copy icon matching the design with deep grey color
  const CopyIcon = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#666666"
      strokeWidth="2" 
      className="ml-1 cursor-pointer"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );

  return (
    <div className="flex min-h-screen bg-[#1A1A1A]">
      {/* Left sidebar - we won't implement it as instructed */}
      <div className="w-[172px] bg-[#1A1A1A] hidden md:block"></div>
      
      {/* Main content */}
      <div className="flex-1 px-4 sm:px-6 md:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
          <h1 className="text-[24px] sm:text-[28px] font-bold text-white">Transaction History</h1>
          
          {/* User info */}
          <div className="flex items-center bg-purple-900 text-white text-sm px-3 py-1.5 rounded-md">
            <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
            <span>0x4543...r8w97</span>
          </div>
        </div>
        
        {/* Filters and search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center flex-wrap gap-3 mb-8">
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <div className="flex items-center h-full pl-3 pr-2 border-r border-gray-700">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <input
              type="text"
              placeholder="Search transaction"
              className="w-full sm:w-[280px] pl-12 pr-4 py-2 bg-[#1E1E1E] border border-gray-700 rounded text-white text-sm focus:outline-none"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center px-3 py-2 bg-[#1E1E1E] border border-gray-700 rounded text-sm text-white">
              All Transactions
              <ChevronDown className="ml-1.5 h-4 w-4" />
            </button>
            
            <button className="flex items-center px-3 py-2 bg-[#1E1E1E] border border-gray-700 rounded text-sm text-white">
              All Networks
              <ChevronDown className="ml-1.5 h-4 w-4" />
            </button>
            
            <button className="flex items-center px-3 py-2 bg-[#1E1E1E] border border-gray-700 rounded text-sm text-white">
              All Currencies
              <ChevronDown className="ml-1.5 h-4 w-4" />
            </button>
            
            <button className="flex items-center px-3 py-2 bg-[#1E1E1E] border border-gray-700 rounded text-sm text-white">
              Creation Date
              <ChevronDown className="ml-1.5 h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Transaction Table */}
        <div className="w-full overflow-x-auto">
          <Table className="border border-gray-800 min-w-[900px]">
            <TableHeader className="bg-[#222222]">
              <TableRow className="border-b border-gray-800">
                <TableHead className="text-white font-normal py-4 text-left pl-6 pr-6">Type</TableHead>
                <TableHead className="text-white font-normal py-4 text-left pr-6">Date</TableHead>
                <TableHead className="text-white font-normal py-4 text-left pr-6">Amount</TableHead>
                <TableHead className="text-white font-normal py-4 text-left pr-6">From</TableHead>
                <TableHead className="text-white font-normal py-4 text-left pr-6">To</TableHead>
                <TableHead className="text-white font-normal py-4 text-left pr-6">Department</TableHead>
                <TableHead className="text-white font-normal py-4 text-left">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow 
                  key={transaction.id}
                  className="border-b border-gray-800/70 hover:bg-[#222222] transition-colors"
                >
                  <TableCell className={`py-4 pl-6 ${transaction.type === 'Deposit' ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.type}
                  </TableCell>
                  <TableCell className="py-4 text-white">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="py-4 text-white">
                    {transaction.amount}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center">
                      <span className="text-[#0900FF]">{transaction.from}</span>
                      <CopyIcon />
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center">
                      <span className="text-[#0900FF]">{transaction.to}</span>
                      <CopyIcon />
                    </div>
                  </TableCell>
                  <TableCell className="py-4 text-white">{transaction.department}</TableCell>
                  <TableCell className="py-4">
                    <span className={`inline-block px-5 py-1 rounded-full text-xs font-medium
                      ${transaction.status === 'Successful' ? 'bg-green-900/30 text-green-500' : 
                        transaction.status === 'Pending' ? 'bg-yellow-900/30 text-yellow-500' : 
                        'bg-red-900/30 text-red-500'}`}>
                      {transaction.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}; 