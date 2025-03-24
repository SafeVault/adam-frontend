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
  import { useState } from "react";
  
  const PayrollTable = () => {
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
  
    // Sample data - in a real app this would come from props or API
    const employees = [
      {
        id: 1,
        name: "Robiin Diachu",
        department: "Design & Marketing",
        amount: "$2,000,000.00",
        paymentType: "Crypto",
        status: "Awaiting Payment",
      },
    ];
  
    // Toggle mobile row expansion
    const toggleRow = (id: number | null) => {
      setExpandedRow(expandedRow === id ? null : id);
    };
  
    return (
      <div className="w-full">
        {/* Desktop View - Hidden on mobile */}
        <div className="hidden md:block rounded-md border border-gray-700 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-700 hover:bg-transparent">
                <TableHead className="text-gray-400 font-medium h-10 py-2 px-4 text-left bg-[#1E1E1E] w-10">
                  <Checkbox className="rounded-sm bg-gray-700 border-none cursor-pointer" />
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
              {employees.map((employee) => (
                <TableRow
                  key={employee.id}
                  className="border-b border-gray-800 hover:bg-gray-900"
                >
                  <TableCell className="py-4 px-4 w-10">
                    <Checkbox className="rounded-sm bg-gray-700 border-none cursor-pointer" />
                  </TableCell>
                  <TableCell className="py-4 px-4 font-medium">
                    {employee.name}
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    {employee.department}
                  </TableCell>
                  <TableCell className="py-4 px-4">{employee.amount}</TableCell>
                  <TableCell className="py-4 px-4">
                    <Badge
                     
                      className="bg-transparent text-gray-400  border-0 py-1 px-2 rounded"
                    >
                      {employee.paymentType}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <span className="text-gray-500">{employee.status}</span>
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
              ))}
            </TableBody>
          </Table>
        </div>
  
        {/* Mobile View - Visible only on small screens */}
        <div className="md:hidden">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="mb-4 border border-gray-700 rounded-md bg-gray-900"
            >
              <div
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleRow(employee.id)}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox className="rounded-sm bg-gray-700 border-none cursor-pointer" />
                  <div>
                    <h3 className="font-medium text-white">{employee.name}</h3>
                    <p className="text-sm text-gray-400">{employee.department}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-500 mr-2">{employee.status}</span>
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
          ))}
        </div>
  
        {/* Proceed to Pay Button */}
        <div className="flex justify-end mt-6">
          <Button className="h-[40px] min-w-[146px] bg-gradient-to-r from-[#1A001A] to-[#800080] rounded-sm hover:cursor-pointer hover:bg-gradient-to-r hover:to-[#1A001A] hover:from-[#800080] text-white">
            Proceed to pay
          </Button>
        </div>
      </div>
    );
  };
  
  export default PayrollTable;
  