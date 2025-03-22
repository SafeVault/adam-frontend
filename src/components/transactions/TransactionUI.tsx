import { useState, useEffect } from 'react';
import { Transaction } from '../../interfaces/Transaction';
import { TransactionList } from './TransactionList';
import { TransactionCard } from './TransactionCard';

interface TransactionUIProps {
  transactions: Transaction[];
  className?: string;
}

export const TransactionUI = ({ transactions, className = '' }: TransactionUIProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  // Function to handle window resize and update mobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
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
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>
      
      {/* Desktop view - Table */}
      <div className={`${isMobile ? 'hidden' : 'block'}`}>
        <TransactionList 
          transactions={transactions} 
          onRowClick={handleTransactionSelect}
        />
      </div>
      
      {/* Mobile view - Cards */}
      <div className={`${isMobile ? 'block' : 'hidden'}`}>
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
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