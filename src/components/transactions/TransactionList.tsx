import { Transaction } from '../../interfaces/Transaction';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../ui/table';
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
  return (
    <div className={`${className}`}>
      <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-adam-black-50 text-adam-white-50">
              <TableHead style={{ minWidth: '180px' }}>Date</TableHead>
              <TableHead style={{ minWidth: '200px' }}>Description</TableHead>
              <TableHead className="text-right" style={{ minWidth: '150px' }}>Amount</TableHead>
              <TableHead className="text-center" style={{ minWidth: '120px' }}>Status</TableHead>
              <TableHead style={{ minWidth: '150px' }}>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No transactions available
                </TableCell>
              </TableRow>
            ) : (
              transactions.map((transaction) => (
                <TableRow 
                  key={transaction.id}
                  onClick={() => onRowClick && onRowClick(transaction)}
                  className={onRowClick ? 'cursor-pointer hover:bg-adam-yellow-50/20' : ''}
                >
                  <TableCell>{formatDate(transaction.date)}</TableCell>
                  <TableCell className="max-w-xs truncate">{transaction.description}</TableCell>
                  <TableCell className="text-right">
                    <span className={transaction.type === 'credit' ? 'text-adam-green-100' : 'text-adam-red-100'}>
                      {transaction.type === 'credit' ? '+' : '-'} {formatCurrency(transaction.amount, transaction.currency)}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <StatusBadge status={transaction.status} />
                  </TableCell>
                  <TableCell>{transaction.category}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}; 