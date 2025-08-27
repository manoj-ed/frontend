"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const FilterAside = () => {
  const [selectedRange, setSelectedRange] = useState(null);

  const priceRanges = [
    "₹99,999 - ₹199,999",
    "₹200,000 - ₹399,999",
    "₹400,000 - ₹699,999",
    "₹700,000 - ₹999,999",
    "₹1,000,000 - ₹1,499,999",
    "₹1,500,000 - ₹1,999,999",
  ];

  return (
    <aside className="w-full space-y-6 p-4 border rounded-lg bg-white shadow-sm">
      {/* Price Range */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Price Range
        </h3>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Price Range</h3>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRange(range)}
                className={`px-3 py-1 border rounded-md text-xs transition-all duration-200
              ${
                selectedRange === range
                  ? "border-orange-500 bg-orange-50 text-orange-600"
                  : "border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-500"
              }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Example Checkbox Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Category
        </h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <Checkbox className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
            Sub Category 1
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <Checkbox className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
            Sub Category 2
          </label>
        </div>
      </div>
    </aside>
  );
};

export default FilterAside;
