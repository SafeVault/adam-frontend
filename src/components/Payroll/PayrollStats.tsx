import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  count: number | null;
  total: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  count,
  total,
  active = false,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative px-2 py-3 cursor-pointer transition-colors",
        active ? "bg-gray-800" : "bg-transparent hover:bg-gray-900",
        className
      )}
    >
      <h3 className="text-gray-200 text-sm">{title}</h3>
      <div className="text-xl font-medium mt-1">{count}</div>
      <div className="text-xs text-gray-400 mt-0.5">{total}</div>
    </div>
  );
};

export default function PayrollStats() {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { id: "all", title: "All", count: 34, total: "total employees" },
    { id: "paid", title: "Paid", count: 13, total: "total employees" },
    {
      id: "scheduled",
      title: "Scheduled",
      count: 20,
      total: "total employees",
    },
    {
      id: "awaiting",
      title: "Awaiting Payment",
      count: 0,
      total: "total employees",
    },
    { id: "overdue", title: "Overdue", count: 0, total: "total employees" },
    { id: "void", title: "Void", count: 1, total: "total employees" },
  ];

  return (
    <>
      {/* Desktop View - Horizontal Cards */}
      <div className="hidden md:flex w-full ">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            total={`${stat.count} ${stat.total}`}
            active={activeTab === stat.id}
            onClick={() => setActiveTab(stat.id)}
            className={`${
              activeTab === stat.id
                ? "text-white bg-gradient-to-r from-[#800080]/40 to-[#ffffff]/20"
                : "text-gray-400"
            } flex-1 h-[70px] mb-5`}
            count={null}
          />
        ))}
      </div>

      {/* Mobile View - Tabs */}
      <div className="md:hidden mb-5 max-w-screen overflow-hidden">
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="bg-transparent  w-full justify-start h-auto p-0 overflow-x-auto flex-nowrap whitespace-nowrap">
            {stats.map((stat) => (
              <TabsTrigger
                key={stat.id}
                value={stat.id}
                className={cn(
                  "px-4 py-2 data-[state=active]:bg-gray-800 data-[state=active]:shadow-none relative h-10",
                  "data-[state=active]:text-white text-gray-400",
                  "focus-visible:ring-0 focus-visible:ring-offset-0",
                  "shrink-0"
                )}
              >
                {stat.title}
                {activeTab === stat.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-adam-purple-100"></div>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </>
  );
}
