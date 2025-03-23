import { useState, useEffect } from 'react';
import { Transaction } from '../../interfaces/Transaction';
import { TransactionList } from './TransactionList';
import { TransactionCard } from './TransactionCard';

interface TransactionUIProps {
  transactions: Transaction[];
  className?: string;
}

export const TransactionUI = ({ transactions, className = '' }: TransactionUIProps) => {
  const [viewMode, setViewMode] = useState<'table' | 'card'>('table');
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  // Function to handle window resize and update view mode
  const handleResize = () => {
    setViewMode(window.innerWidth < 640 ? 'card' : 'table'); // 640px is the sm breakpoint in Tailwind
  };

  // Set up resize listener
  useEffect(() => {
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handler for transaction selection
  const handleTransactionSelect = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    // Could show a detail view or modal here
    console.log('Selected transaction:', transaction);
  };

  return (
    <div className={`container mx-auto px-4 py-6 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <div className="sm:hidden">
          <button
            onClick={() => setViewMode(viewMode === 'table' ? 'card' : 'table')}
            className="px-4 py-2 bg-adam-black-50 text-adam-white-50 rounded-lg text-sm"
          >
            {viewMode === 'table' ? 'Switch to Cards' : 'Switch to Table'}
          </button>
        </div>
      </div>
      
      {/* Table view */}
      <div className={viewMode === 'table' ? 'block' : 'hidden'}>
        <TransactionList 
          transactions={transactions} 
          onRowClick={handleTransactionSelect}
        />
      </div>
      
      {/* Card view */}
      <div className={viewMode === 'card' ? 'block' : 'hidden'}>
        {transactions.map(transaction => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            onClick={handleTransactionSelect}
          />
        ))}
      </div>
      
      {transactions.length === 0 && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-500">No transactions available</p>
        </div>
      )}
    </div>
  );
}; 