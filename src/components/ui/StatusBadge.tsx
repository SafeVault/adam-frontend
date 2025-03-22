interface StatusBadgeProps {
  status: 'pending' | 'completed' | 'failed';
  className?: string;
}

export const StatusBadge = ({ status, className = '' }: StatusBadgeProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-adam-green-50 text-adam-green-100';
      case 'pending':
        return 'bg-adam-yellow-50 text-adam-black-50';
      case 'failed':
        return 'bg-adam-red-50 text-adam-red-100';
      default:
        return 'bg-adam-white-50 text-adam-black-50';
    }
  };

  return (
    <span
      className={`${getStatusStyles()} px-2 py-1 rounded-full text-xs font-medium ${className}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}; 