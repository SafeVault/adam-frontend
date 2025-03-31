import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PencilIcon, Trash2, ChevronRightIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { usePayrollContext } from "@/lib/contexts/PayrollContext";

const PayrollTable = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const { activeTabId } = usePayrollContext();

  // Sample data with statuses matching the tabs
  const allEmployees = [
    {
      id: 1,
      name: "Robin Diachu",
      department: "Design & Marketing",
      amount: "$2,000,000.00",
      paymentType: "Crypto",
      walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      status: "Awaiting Payment",
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Engineering",
      amount: "$120,000.00",
      paymentType: "Bank Transfer",
      accountDetails: "****3456",
      status: "Paid",
    },
    {
      id: 3,
      name: "Mark Johnson",
      department: "Operations",
      amount: "$95,000.00",
      paymentType: "Crypto",
      walletAddress: "0x8902Ed7a3C338F0BdEd505BD1D19a12f677b2C23",
      status: "Scheduled",
    },
    {
      id: 4,
      name: "Sarah Williams",
      department: "Finance",
      amount: "$125,000.00",
      paymentType: "Bank Transfer",
      accountDetails: "****7890",
      status: "Scheduled",
    },
    {
      id: 5,
      name: "Michael Brown",
      department: "Human Resources",
      amount: "$85,000.00",
      paymentType: "Bank Transfer",
      accountDetails: "****2345",
      status: "Awaiting Payment",
    },
    {
      id: 6,
      name: "David Miller",
      department: "Sales",
      amount: "$110,000.00",
      paymentType: "Crypto",
      walletAddress: "0x3456Bd982A7c338F0BEd505Bd1D19a12f677E1A9",
      status: "Paid",
    },
    {
      id: 7,
      name: "Emily Davis",
      department: "Customer Support",
      amount: "$78,000.00",
      paymentType: "Bank Transfer",
      accountDetails: "****6789",
      status: "Paid",
    },
    {
      id: 8,
      name: "Alex Turner",
      department: "Product",
      amount: "$135,000.00",
      paymentType: "Crypto",
      walletAddress: "0xD902Cb8A3C556F0Bed505Bd1D45a12f677b2C21",
      status: "Overdue",
    },
    {
      id: 9,
      name: "Jessica Wilson",
      department: "Marketing",
      amount: "$92,000.00",
      paymentType: "Bank Transfer",
      accountDetails: "****1234",
      status: "Void",
    },
    {
      id: 10,
      name: "Christopher Lee",
      department: "Engineering",
      amount: "$140,000.00",
      paymentType: "Crypto",
      walletAddress: "0x71A7656EC7ab88b098defB751B7401B5f6d8123F",
      status: "Scheduled",
    }
  ];

  // Filter employees based on active tab
  const filteredEmployees = activeTabId === 'all' 
    ? allEmployees 
    : allEmployees.filter(emp => {
        const status = emp.status.toLowerCase().replace(/\s/g, '');
        return status === activeTabId;
      });

  // Toggle mobile row expansion
  const toggleRow = (id: number | null) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // Handle individual employee selection
  const toggleEmployeeSelection = (id: number) => {
    if (selectedEmployees.includes(id)) {
      setSelectedEmployees(selectedEmployees.filter(empId => empId !== id));
    } else {
      setSelectedEmployees([...selectedEmployees, id]);
    }
  };

  // Handle select all checkbox
  const toggleSelectAll = () => {
    if (!selectAll) {
      // Select all filtered employees
      setSelectedEmployees(filteredEmployees.map(emp => emp.id));
    } else {
      // Deselect all
      setSelectedEmployees([]);
    }
    setSelectAll(!selectAll);
  };

  // Reset select all when filtered list changes
  useEffect(() => {
    // Check if all filtered employees are selected
    const allSelected = filteredEmployees.length > 0 && 
      filteredEmployees.every(emp => selectedEmployees.includes(emp.id));
    setSelectAll(allSelected);

    // Log for debugging
    console.log("Filter changed:", { 
      activeTabId, 
      employeeCount: filteredEmployees.length,
      selectedCount: selectedEmployees.length 
    });
  }, [filteredEmployees, selectedEmployees, activeTabId]);

  // Get the payment method/account display
  const getPaymentInfo = (employee: any) => {
    if (employee.paymentType === "Crypto") {
      return (
        <Badge className="bg-transparent text-gray-400 border-0 py-1 px-2 rounded">
          Crypto: {employee.walletAddress?.substring(0, 6)}...{employee.walletAddress?.substring(38)}
        </Badge>
      );
    } else {
      return (
        <Badge className="bg-transparent text-gray-400 border-0 py-1 px-2 rounded">
          Bank: {employee.accountDetails}
        </Badge>
      );
    }
  };

  // Style for status badges
  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return "text-green-500";
      case 'scheduled':
        return "text-blue-500";
      case 'awaiting payment':
        return "text-yellow-500";
      case 'overdue':
        return "text-red-500";
      case 'void':
        return "text-gray-500";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="w-full">
      {/* Desktop View - Hidden on mobile */}
      <div className="hidden md:block rounded-md border border-gray-700 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-700 hover:bg-transparent">
              <TableHead className="text-gray-400 font-medium h-10 py-2 px-4 text-left bg-[#1E1E1E] w-10">
                <Checkbox 
                  className="rounded-sm bg-gray-700 border-none cursor-pointer" 
                  checked={selectAll}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead className="text-gray-400 font-medium h-10 py-2 px-4 text-left bg-[#1E1E1E]">
                Name
              </TableHead>
              <TableHead className="text-gray-400 font-medium h-10 py-2 px-4 text-left bg-[#1E1E1E]">
                Department
              </TableHead>
              <TableHead className="text-gray-400 font-medium h-10 py-2 px-4 text-left bg-[#1E1E1E]">
                Amount
              </TableHead>
              <TableHead className="text-gray-400 font-medium h-10 py-2 px-4 text-left bg-[#1E1E1E]">
                Wallet Address/Bank Account
              </TableHead>
              <TableHead className="text-gray-400 font-medium h-10 py-2 px-4 text-left bg-[#1E1E1E]">
                Status
              </TableHead>
              <TableHead className="text-gray-400 font-medium h-10 py-2 px-4 text-left bg-[#1E1E1E] w-16"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <TableRow
                  key={employee.id}
                  className={`border-b border-gray-800 ${
                    selectedEmployees.includes(employee.id) 
                      ? "bg-gray-800 hover:bg-gray-800" 
                      : "hover:bg-gray-900"
                  }`}
                >
                  <TableCell className="py-4 px-4 w-10">
                    <Checkbox 
                      className="rounded-sm bg-gray-700 border-none cursor-pointer" 
                      checked={selectedEmployees.includes(employee.id)}
                      onCheckedChange={() => toggleEmployeeSelection(employee.id)}
                    />
                  </TableCell>
                  <TableCell className="py-4 px-4 font-medium">
                    {employee.name}
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    {employee.department}
                  </TableCell>
                  <TableCell className="py-4 px-4">{employee.amount}</TableCell>
                  <TableCell className="py-4 px-4">
                    {getPaymentInfo(employee)}
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <span className={getStatusStyle(employee.status)}>{employee.status}</span>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:bg-gray-800 rounded-full"
                      >
                        <PencilIcon size={18} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:bg-gray-800 rounded-full"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-400">
                  No employees found in this category
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile View - Visible only on small screens */}
      <div className="md:hidden">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className={`mb-4 border border-gray-700 rounded-md ${
                selectedEmployees.includes(employee.id) 
                  ? "bg-gray-800" 
                  : "bg-gray-900"
              }`}
            >
              <div
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleRow(employee.id)}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox 
                    className="rounded-sm bg-gray-700 border-none cursor-pointer" 
                    checked={selectedEmployees.includes(employee.id)}
                    onCheckedChange={() => toggleEmployeeSelection(employee.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div>
                    <h3 className="font-medium text-white">{employee.name}</h3>
                    <p className="text-sm text-gray-400">{employee.department}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`mr-2 ${getStatusStyle(employee.status)}`}>{employee.status}</span>
                  <ChevronRightIcon
                    size={18}
                    className={`transition-transform ${
                      expandedRow === employee.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>

              {expandedRow === employee.id && (
                <div className="px-4 pb-4 pt-0 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <p className="text-xs text-gray-400">Amount</p>
                      <p>{employee.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Payment Type</p>
                      <Badge
                        variant="outline"
                        className="bg-transparent text-gray-400 border-gray-700 py-1 px-2 rounded mt-1"
                      >
                        {employee.paymentType}
                      </Badge>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-gray-400">
                        {employee.paymentType === "Crypto" ? "Wallet Address" : "Bank Account"}
                      </p>
                      <p className="text-sm truncate mt-1">
                        {employee.paymentType === "Crypto" 
                          ? employee.walletAddress 
                          : employee.accountDetails}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 text-gray-400 hover:bg-gray-800 rounded-full"
                    >
                      <PencilIcon size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 text-gray-400 hover:bg-gray-800 rounded-full"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-400 border border-gray-700 rounded-md">
            No employees found in this category
          </div>
        )}
      </div>

      {/* Proceed to Pay Button */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-gray-400">
          {selectedEmployees.length > 0 ? (
            <span>{selectedEmployees.length} employee(s) selected</span>
          ) : (
            <span>No employees selected</span>
          )}
        </div>
        <Button 
          className="h-[40px] min-w-[146px] bg-gradient-to-r from-[#1A001A] to-[#800080] rounded-sm hover:cursor-pointer hover:bg-gradient-to-r hover:to-[#1A001A] hover:from-[#800080] text-white"
          disabled={selectedEmployees.length === 0}
        >
          Proceed to pay
        </Button>
      </div>
    </div>
  );
};

export default PayrollTable;