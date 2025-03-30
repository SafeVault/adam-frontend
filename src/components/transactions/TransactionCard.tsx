import { Transaction } from '../../interfaces/Transaction';
import { StatusBadge } from '../ui/StatusBadge';
import { formatDate, formatCurrency } from '../../utils/formatters';

interface TransactionCardProps {
  transaction: Transaction;
  onClick?: (transaction: Transaction) => void;
  className?: string;
}

export const TransactionCard = ({ 
  transaction, 
  onClick,
  className = '' 
}: TransactionCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(transaction);
    }
  };

  return (
    <div 
      className={`p-4 border rounded-lg mb-3 shadow-sm ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium mb-1">{transaction.description}</h3>
          <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
        </div>
        <StatusBadge status={transaction.status} />
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm">{transaction.category}</span>
        <span className={`font-bold ${
          transaction.type === 'credit' ? 'text-adam-green-100' : 'text-adam-red-100'
        }`}>
          {transaction.type === 'credit' ? '+' : '-'} {formatCurrency(transaction.amount, transaction.currency)}
        </span>
      </div>
      
      {(transaction.recipient || transaction.sender) && (
        <div className="text-xs text-gray-500 mt-2">
          {transaction.type === 'credit' 
            ? `From: ${transaction.sender}` 
            : `To: ${transaction.recipient}`}
        </div>
      )}
    </div>
  );
};
