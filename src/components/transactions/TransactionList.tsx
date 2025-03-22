import { Transaction } from '../../interfaces/Transaction';
import { Table, Column } from '../ui/Table';
import { StatusBadge } from '../ui/StatusBadge';
import { formatDate, formatCurrency } from '../../utils/formatters';

interface TransactionListProps {
  transactions: Transaction[];
  className?: string;
  onRowClick?: (transaction: Transaction) => void;
}

export const TransactionList = ({ 
  transactions, 
  className = '',
  onRowClick,
}: TransactionListProps) => {
  const columns: Column<Transaction>[] = [
    {
      key: 'date',
      header: 'Date',
      render: (transaction) => formatDate(transaction.date),
    },
    {
      key: 'description',
      header: 'Description',
      className: 'max-w-xs truncate',
    },
    {
      key: 'amount',
      header: 'Amount',
      render: (transaction) => (
        <span className={transaction.type === 'credit' ? 'text-adam-green-100' : 'text-adam-red-100'}>
          {transaction.type === 'credit' ? '+' : '-'} {formatCurrency(transaction.amount, transaction.currency)}
        </span>
      ),
      className: 'text-right',
    },
    {
      key: 'status',
      header: 'Status',
      render: (transaction) => <StatusBadge status={transaction.status} />,
      className: 'text-center',
    },
    {
      key: 'category',
      header: 'Category',
      className: 'hidden md:table-cell', // Hide on mobile, show on medium screens and up
    },
  ];

  return (
    <div className={`${className}`}>
      <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
      <Table 
        data={transactions}
        columns={columns}
        onRowClick={onRowClick}
      />
    </div>
  );
}; 