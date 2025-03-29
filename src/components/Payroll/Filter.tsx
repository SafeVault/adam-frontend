import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Input } from "@/components/ui/input";
  import { SearchIcon, FilterIcon } from "lucide-react";
  import { useState } from "react";
  import { Button } from "@/components/ui/button";
  
  function FilterComponent() {
    const [showFilters, setShowFilters] = useState(false);
  
    return (
      <div>
        {/* Desktop view - Large screens only */}
        <div className="hidden lg:flex">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-6 w-full justify-between">
            <div className="relative flex-grow">
              <SearchIcon
                size={16}
                className="absolute left-3 top-3 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Search employee name, wallet address or wallet address"
                className="pl-10 bg-transparent border-gray-700 text-white w-full max-w-[481px]"
              />
            </div>
  
            <div className="flex gap-2 ">
              <Select defaultValue="all-methods">
                <SelectTrigger className="bg-transparent border-gray-700 text-white w-40">
                  <SelectValue placeholder="All Methods" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="all-methods">All Methods</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="crypto">Crypto</SelectItem>
                </SelectContent>
              </Select>
  
              <Select defaultValue="all-currencies">
                <SelectTrigger className="bg-transparent border-gray-700 text-white w-40">
                  <SelectValue placeholder="All Currencies" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="all-currencies">All Currencies</SelectItem>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                </SelectContent>
              </Select>
  
              <Select defaultValue="creation-date">
                <SelectTrigger className="bg-transparent border-gray-700 text-white w-40">
                  <SelectValue placeholder="Creation Date" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="creation-date">Creation Date</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
  
        {/* Mobile and Tablet view - Small to medium screens */}
        <div className="lg:hidden">
          {/* Search bar always visible, full width on mobile/tablet */}
          <div className="relative mb-4">
            <SearchIcon
              size={16}
              className="absolute left-3 top-2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Search employee name or wallet address"
              className="pl-10 bg-transparent border-gray-700 text-white w-full"
            />
          </div>
  
          {/* Mobile/Tablet: Toggle button to show/hide filters */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">
              {showFilters ? "Active filters" : "Filters hidden"}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="bg-transparent border-gray-700 text-white hover:bg-gray-800"
            >
              <FilterIcon size={16} className="mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>
  
          {/* Filters - stacked on mobile/tablet */}
          <div
            className={`${showFilters ? "flex" : "hidden"} flex-col gap-3 mb-6`}
          >
            <Select defaultValue="all-methods">
              <SelectTrigger className="bg-transparent border-gray-700 text-white w-full">
                <SelectValue placeholder="All Methods" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                <SelectItem value="all-methods">All Methods</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="crypto">Crypto</SelectItem>
              </SelectContent>
            </Select>
  
            <Select defaultValue="all-currencies">
              <SelectTrigger className="bg-transparent border-gray-700 text-white w-full">
                <SelectValue placeholder="All Currencies" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                <SelectItem value="all-currencies">All Currencies</SelectItem>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
              </SelectContent>
            </Select>
  
            <Select defaultValue="creation-date">
              <SelectTrigger className="bg-transparent border-gray-700 text-white w-full">
                <SelectValue placeholder="Creation Date" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                <SelectItem value="creation-date">Creation Date</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    );
  }
  
  export default FilterComponent;
  