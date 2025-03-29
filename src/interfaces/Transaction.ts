export interface Transaction {
  id: string;
  date: string;
  amount: number;
  currency: string;
  type: 'credit' | 'debit';
  status: 'pending' | 'completed' | 'failed';
  description: string;
  recipient?: string;
  sender?: string;
  category?: string;
} 