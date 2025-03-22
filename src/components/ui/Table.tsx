import { ReactNode } from 'react';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => ReactNode;
  width?: string;
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
  onRowClick?: (item: T) => void;
  idKey?: keyof T;
}

export function Table<T>({
  data,
  columns,
  className = '',
  onRowClick,
  idKey = 'id' as keyof T,
}: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full border-collapse ${className}`}>
        <thead>
          <tr className="bg-adam-black-50 text-adam-white-50">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`p-4 text-left ${column.className || ''}`}
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="p-4 text-center text-adam-black-50"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                key={item[idKey] as string || index}
                className={`border-b border-adam-black-50/10 hover:bg-adam-yellow-50/20 ${
                  onRowClick ? 'cursor-pointer' : ''
                }`}
                onClick={() => onRowClick && onRowClick(item)}
              >
                {columns.map((column) => (
                  <td
                    key={`${item[idKey] as string || index}-${column.key}`}
                    className={`p-4 ${column.className || ''}`}
                  >
                    {column.render ? column.render(item) : (item as any)[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
} 