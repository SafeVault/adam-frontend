import { useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../ui/table';
import { Search, ChevronDown, Copy } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'Deposit' | 'Withdraw';
  date: string;
  amount: number;
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
    amount: 2458.66,
    from: '0x48...7xv63',
    to: '0x5F...8w16f',
    department: 'Marketing',
    status: 'Successful'
  },
  {
    id: '2',
    type: 'Withdraw',
    date: '02 September, 2023',
    amount: 2458.66,
    from: '0x78...9xv74',
    to: '0x9F...7v43d',
    department: 'Marketing',
    status: 'Failed'
  },
  {
    id: '3',
    type: 'Deposit',
    date: '02 September, 2023',
    amount: 2458.66,
    from: '0x63...4xv12',
    to: '0x2F...5a08e',
    department: 'Marketing',
    status: 'Pending'
  }
];

export const TransactionHistory = () => {
  const [transactions] = useState<Transaction[]>(mockTransactions);

  return (
    <div className="bg-[#1E1E1E] text-white p-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
        
        {/* Filters and search */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search transaction"
              className="w-full md:w-[280px] pl-10 pr-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center px-3 py-2 bg-transparent border border-gray-700 rounded-md text-sm text-white/80">
              All Transactions
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <button className="flex items-center px-3 py-2 bg-transparent border border-gray-700 rounded-md text-sm text-white/80">
              All Networks
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <button className="flex items-center px-3 py-2 bg-transparent border border-gray-700 rounded-md text-sm text-white/80">
              All Currencies
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <button className="flex items-center px-3 py-2 bg-transparent border border-gray-700 rounded-md text-sm text-white/80">
              Creation Date
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Transaction Table */}
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-800">
                <TableHead className="text-gray-400 font-medium py-4">Type</TableHead>
                <TableHead className="text-gray-400 font-medium py-4">Date</TableHead>
                <TableHead className="text-gray-400 font-medium py-4">Amount</TableHead>
                <TableHead className="text-gray-400 font-medium py-4">From</TableHead>
                <TableHead className="text-gray-400 font-medium py-4">To</TableHead>
                <TableHead className="text-gray-400 font-medium py-4">Department</TableHead>
                <TableHead className="text-gray-400 font-medium py-4">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow 
                  key={transaction.id}
                  className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
                >
                  <TableCell className={`py-4 ${transaction.type === 'Deposit' ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.type}
                  </TableCell>
                  <TableCell className="py-4">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="py-4">
                    ${transaction.amount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center text-[#4B99FF]">
                      {transaction.from}
                      <Copy className="ml-1 h-4 w-4 cursor-pointer" />
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center text-[#4B99FF]">
                      {transaction.to}
                      <Copy className="ml-1 h-4 w-4 cursor-pointer" />
                    </div>
                  </TableCell>
                  <TableCell className="py-4">{transaction.department}</TableCell>
                  <TableCell className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium
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