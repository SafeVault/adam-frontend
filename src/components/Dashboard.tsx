import { useState } from "react";
import Charts from "@/components/Charts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { truncAddress } from "@/helpers";
import { transactions } from "@/constants";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("weekly");
  return (
    <div className="p-5 ">
      <p className="font-medium text-[30px] text-white mb-3">
        👋🏽 Hey Designking!
      </p>
      <p className="font-medium text-[30px] text-white">Dashboard!</p>
      <main className="grid grid-rows-[auto_1fr] pt-2 ">
        <section className="grid grid-cols-3 gap-5">
          <div className="grid grid-rows-[auto_1fr] gap-5 col-span-2">
            <div className="grid grid-cols-3 gap-5">
              <div className="border-[1px] relative overflow-hidden text-white flex-col border-white/15 bg-black h-[107px] p-5 rounded-lg shadow-md flex items-start justify-left">
                <span className="text-sm font-medium pb-3">Total Amount:</span>{" "}
                <span className="text-2xl font-medium">
                  $2,323,677.<span className="text-white/50">46</span>
                </span>
                <img
                  src="blur.svg"
                  alt="blur"
                  className="size-[430px] absolute -top-[90px] left-0"
                />
              </div>
              <div className="border-[1px] relative overflow-hidden text-white flex-col border-white/15 bg-black h-[107px] p-5 rounded-lg shadow-md flex items-start justify-left">
                <span className="text-sm font-medium pb-3">Amount Paid:</span>{" "}
                <span className="text-2xl font-medium">
                  $1,323,677.<span className="text-white/50">46</span>
                </span>
                <img
                  src="blur.svg"
                  alt="blur"
                  className="size-[430px] absolute -top-[90px] left-0"
                />
              </div>
              <div className="border-[1px] relative overflow-hidden text-white flex-col border-white/15 bg-black h-[107px] p-5 rounded-lg shadow-md flex items-start justify-left">
                <span className="text-sm font-medium pb-3">
                  Total Number of Employees paid:
                </span>{" "}
                <span className="text-2xl font-medium">2,586</span>
                <img
                  src="blur.svg"
                  alt="blur"
                  className="size-[430px] absolute -top-[90px] left-0"
                />
              </div>
            </div>

            <div className="bg-adam-black-50  border-white/15 border-[1px] p-5 rounded-lg shadow-md h-[367px] flex flex-col ">
              <div className="flex justify-between mb-5 mt-2">
                <p className="font-medium text-[20px] text-white">Payments</p>

                <div className="w-[160px] h-[28px] rounded-[3px] flex items-center justify-center bg-white/20  ">
                  {["weekly", "monthly"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 text-white h-[28px] w-[50%]  cursor-pointer text-sm font-medium  transition-all ease-in-out duration-500
            ${activeTab === tab ? "bg-white/10 rounded-[3px]" : ""}
          `}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <Charts />
            </div>
          </div>

          {/* Right Section (Deposit + Upcoming Payments) */}
          <div className="grid grid-rows-5 ">
            <div className="bg-adam-black-50 relative row-span-3 border-white/15 border-[1px] p-5 rounded-lg shadow-md flex flex-col h-[286px]">
              <p className="font-medium text-[15px] mb-5 text-white">Deposit</p>
              <p className="text-[12px] text-white/50">
                Balance: 3,036,00.65 USDT
              </p>
              <input
                type="number"
                className="w-[100%] focus:outline-0 h-[87px] bg-white/5 rounded-[5px] mt-4 text-[40px] pl-5 pr-28 appearance-none  text-white/30"
                placeholder="0"
              />
              <p className="text-[15px] font-medium absolute top-[42%] right-10 text-white">
                Max
              </p>
              <div className="flex gap-[5px] mt-2 items-end justify-end ">
                <div className="w-[31px] h-[20px] flex rounded-[2px] cursor-pointer items-center justify-center bg-white/10 text-white text-[10px] font-normal">
                  {" "}
                  25%
                </div>{" "}
                <div className="w-[31px] h-[20px] flex rounded-[2px] cursor-pointer items-center justify-center bg-white/10 text-white text-[10px] font-normal">
                  {" "}
                  50%
                </div>
                <div className="w-[31px] h-[20px] flex rounded-[2px] cursor-pointer items-center justify-center bg-white/10 text-white text-[10px] font-normal">
                  {" "}
                  75%
                </div>
                <div className="w-[31px] h-[20px] flex rounded-[2px] cursor-pointer items-center justify-center bg-white/10 text-white text-[10px] font-normal">
                  {" "}
                  100%
                </div>
              </div>
              <button className=" cursor-pointer bg-gradient-to-r from-[#3C005A] to-[#800080] text-white h-[40px] mt-10 flex items-center justify-center text-[13px] font-medium">
                Deposit
              </button>
            </div>
            <div className="bg-adam-black-50 p-5 row-span-2 rounded-lg border-white/15 border-[1px] justify-center h-full">
              <p className="text-[15px] text-white font-medium ">
                Upcoming Payments
              </p>
              {[1, 2, 3, 4, 5].map((i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-between text-[12px] pt-[8px] text-white"
                  >
                    {" "}
                    <p>Employee 1</p> <p>$2,000.00</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-5 mt-5">
          <div className="bg-adam-black-50 p-5 h-[247px] col-span-1 rounded-lg shadow-md border-white/15 border-[1px]  justify-center ">
            <p className="text-[15px] text-white font-medium ">
              Upcoming Payments
            </p>
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between text-[12px] pt-[18px] text-white"
                >
                  {" "}
                  <p className="flex gap-2 items-center">
                    {" "}
                    <div className="bg-white rounded-full size-[20px]" />{" "}
                    Employee 1
                  </p>{" "}
                  <p>$2,000.00</p>
                </div>
              );
            })}
          </div>{" "}
          <div className="bg-adam-black-50 h-[247px] border-white/15 border-[1px] p-5 col-span-2 rounded-lg ">
            <div className="flex justify-between mb-5 ">
              <p className="font-medium text-[15px] text-white">
                Transaction History
              </p>

              <p className="font-medium text-[11px] text-white">View all</p>
            </div>
            <Table className=" py-5">
              <TableHeader className="">
                <TableRow className="bg-white/10 text-white border-white/5 ">
                  <TableHead className="rounded-tl-lg">Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead> <TableHead>From</TableHead>{" "}
                  <TableHead>To</TableHead> <TableHead>Department</TableHead>{" "}
                  <TableHead className=" pl-7 rounded-tr-lg">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="border-white/10 border-[1px] text-[13px] font-light">
                {transactions.map((trx, i) => {
                  return (
                    <TableRow key={i} className="text-white border-white/5">
                      <TableCell
                        className={`${
                          trx.type === "Withdraw"
                            ? "text-adam-red-100"
                            : trx.type === "Deposit"
                            ? "text-adam-green-100"
                            : ""
                        } py-[12px]`}
                      >
                        {trx.type}
                      </TableCell>
                      <TableCell>{trx.date}</TableCell>
                      <TableCell> {trx.amount}</TableCell>
                      <TableCell className="text-adam-blue-100 ">
                        <span> {truncAddress(trx.from)}</span>{" "}
                        {/* <img
                          src="/copy.svg"
                          alt="copy logo"
                          className="size-[8px] mt-[3px]"
                        /> */}
                      </TableCell>{" "}
                      <TableCell className="text-adam-blue-100">
                        {truncAddress(trx.to)}
                      </TableCell>{" "}
                      <TableCell className="">{trx.department}</TableCell>{" "}
                      <TableCell
                        className={`${
                          trx.status === "Failed"
                            ? "bg-adam-red-50 text-adam-red-100"
                            : trx.status === "Successful"
                            ? "bg-adam-green-50 text-adam-green-100"
                            : trx.status === "Pending"
                            ? "bg-adam-yellow-50 text-adam-yellow-100"
                            : ""
                        }  rounded-full px-1 mr-2 mt-[4px] flex items-center justify-center`}
                      >
                        {trx.status}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  );
}
