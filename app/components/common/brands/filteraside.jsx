"use client";

import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider, ConfigProvider } from "antd";

const FilterAside = ({ category, pagination, priceSlider, onFilterChange }) => {
  const [initialPriceRange, setInitialPriceRange] = useState([1000, 100000]);

  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [filterData, setFilterData] = useState({});

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);

    setFilterData((prev) => ({
      ...prev,
      price_range: `${value[0]}-${value[1]}`,
    }));
  };

  // useEffect(() => {
  //   if (Array.isArray(priceSlider) && priceSlider.length === 2) {
  //     setInitialPriceRange([Number(priceSlider[0]), Number(priceSlider[1])]);
  //     setPriceRange([Number(priceSlider[0]), Number(priceSlider[1])]);
  //   }
  // }, [priceSlider]);

  useEffect(() => {
    if (Array.isArray(priceSlider) && priceSlider.length === 2) {
      const min = Number(priceSlider[0]);
      const max = Number(priceSlider[1]);

      setInitialPriceRange([min, max]);

      // ✅ Sirf agar priceRange abhi tak change nahi hua hai tabhi set karo
      setPriceRange((prev) => {
        if (prev[0] === 1000 && prev[1] === 100000) {
          return [min, max];
        }
        return prev; // user ne change kiya hai to waisa hi rehne do
      });
    }
  }, [priceSlider]);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filterData);
    }
  }, [filterData, onFilterChange]);

  const handleCheckboxChange = (name, id) => {
    setFilterData((prev) => {
      // Prev categoryIds string ko array me convert karo
      const prevIds = prev.category_ids ? prev.category_ids.split(",") : [];

      const isSelected = prevIds.includes(String(id));

      let updatedIds;
      if (isSelected) {
        // ✅ Agar already selected hai to remove
        updatedIds = prevIds.filter((item) => item !== String(id));
      } else {
        // ✅ Agar nahi hai to add
        updatedIds = [...prevIds, String(id)];
      }

      return {
        ...prev,
        category_ids: updatedIds.join(","), // ✅ "1,2,3" format
      };
    });
  };


  console.log("filter filterData", filterData);

  return (
    <aside className=" space-y-6 py-4 px-5 border rounded-lg bg-white shadow-sm">
      {/* Price Range */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Price Range
        </h3>
        {/* <div className="space-y-3">
          <div className="flex flex-wrap gap-1">
            {priceRanges.map((range, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRange(range)}
                className={`px-2 py-1 border rounded-md text-xs transition-all duration-200
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
        </div> */}
        <ConfigProvider
          theme={{
            components: {
              Slider: {
                railBg: "#d9d9d9",
                railHoverBg: "#d9d9d9", // corrected key
                handleColor: "#f26322",
                handleActiveColor: "#f26322",
                dotActiveBorderColor: "#f26322",
                dotBorderColor: "#f26322",
                trackBg: "#f26322",
                trackHoverBg: "#f26322",
              },
            },
          }}
        >
          <div className="">
            <Slider
              range
              min={initialPriceRange[0]}
              max={initialPriceRange[1]}
              step={1000}
              value={priceRange}
              onChange={handlePriceRangeChange}
              allowCross={false}
              pushable={1000}
            />
            <div className="flex justify-between mt-1 text-xs text-gray-600">
              <span>₹{initialPriceRange[0].toLocaleString()}</span>
              <span>₹{initialPriceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </ConfigProvider>
      </div>

      {/* Example Checkbox Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Category
        </h3>
        <div className="flex flex-col gap-2">
          {category.map((subCategory) => (
            <label
              key={subCategory.id}
              onClick={() =>
                handleCheckboxChange(
                  subCategory.sub_category_name,
                  subCategory.id
                )
              }
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
            >
              <Checkbox className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
              {subCategory.sub_category_name}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterAside;
