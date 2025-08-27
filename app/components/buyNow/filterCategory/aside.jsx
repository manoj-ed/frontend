"use client";

import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector } from "react-redux";
import { getSubCategoryData } from "@/app/utils/buyNewAPI";
import { Slider, ConfigProvider } from "antd";
import { IoIosClose } from "react-icons/io";

const Aside = ({ paramsData, filtterData }) => {
  console.log("params data", paramsData);

  const { brands, filterData } = useSelector((state) => state.product);

  console.log("filterDAta", filterData);
  // const [responeData, setResponseData] = useState();

  const [filters, setFilters] = useState({
    operating_weight: "",
    brand_name: "",
    engine_power: "",
    price_range: "",
  });

  // Single state for price range - this will control the slider
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [initialPriceRange, setInitialPriceRange] = useState([0, 1000000]);

  // OnClick Handle CheckBox Filter
  const handleCheckbox = async (opt) => {
    console.log("Incoming opt:", opt);

    try {
      setFilters((prev) => {
        const updated = { ...prev };

        if (opt?.value) {
          updated.operating_weight = opt.value.replace(/ton[s]?/i, "").trim();
        }
        if (opt?.brand_name) {
          updated.brand_name = opt.brand_name || "";
        }
        if (opt.key === "engine_power") {
          updated.engine_power = opt.value || null;
        }

        if (!opt.value) {
          updated[opt.key] = null;
        }

        return updated;
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Handle price range changes from slider
  const handlePriceRangeChange = async (value) => {
    console.log("Price range changed:", value);

    // Ensure proper range validation
    let [min, max] = value;

    // Prevent min from being greater than max
    if (min > max) {
      min = max;
    }

    // Prevent max from being less than min
    if (max < min) {
      max = min;
    }

    // Ensure values stay within bounds
    min = Math.max(min, initialPriceRange[0]);
    max = Math.min(max, initialPriceRange[1]);

    const validatedRange = [min, max];

    // Update the price range state with validated values
    setPriceRange(validatedRange);

    // Update filters with new price range
    const priceFilter = `${validatedRange[0]}-${validatedRange[1]}`;
    const updatedFilters = { ...filters, price_range: priceFilter };
    setFilters(updatedFilters);

    // Make API call with updated filters
    try {
      const response = await getSubCategoryData(paramsData, updatedFilters);
      console.log("response after price change", response);

      filtterData(response);
      // setResponseData(response);
    } catch (error) {
      console.error("Error updating price filter:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSubCategoryData(paramsData, filters);
        // setResponseData(response);

        // Set initial price range only once when component mounts
        if (
          initialPriceRange[0] === 0 &&
          initialPriceRange[1] === 1000000 &&
          response?.min_price &&
          response?.max_price
        ) {
          const minPrice = Number(response.min_price.replace("₹", "").trim());
          const maxPrice = Number(response.max_price.replace("₹", "").trim());

          setInitialPriceRange([minPrice, maxPrice]);
          setPriceRange([minPrice, maxPrice]);
        }

        filtterData(response);
      } catch (err) {
        console.error("API error:", err);
      }
    };
    fetchData();
  }, [filters.operating_weight, filters.brand_name, filters.engine_power]); // Remove price from dependencies to avoid infinite loop

  // Clear All Filters
  const handleClearAll = () => {
    setFilters({
      operating_weight: "",
      brand_name: "",
      engine_power: "",
      price_range: "",
    });
    setPriceRange(initialPriceRange);
  };

  // console.log("response data", responeData);
  console.log("Final filters object:", filters);
  console.log("Current priceRange:", priceRange);

  return (
    <div className="w-full flex py-5 flex-col gap-2 items-start justify-center p-4 border border-gray-300 rounded-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full z-10">
        <div className="flex pb-3 gap-2 items-start justify-between">
          <h3 className="text-sm font-semibold">Price (In Lakhs)</h3>
          <div
            className="text-xs flex items-center font-normal hover:underline cursor-pointer hover:text-lightblue text-orange"
            onClick={() => handleClearAll()}
          >
            <span className="text-lg font-bold">
              <IoIosClose />
            </span>
            <button className="cursor-pointer">Clear All</button>
          </div>
        </div>

        <ConfigProvider
          theme={{
            components: {
              Slider: {
                railBg: "#d9d9d9",
                railHoverBgF: "#d9d9d9",
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
          <div>
            <Slider
              range
              min={initialPriceRange[0]}
              max={initialPriceRange[1]}
              step={1000}
              value={priceRange}
              onChange={handlePriceRangeChange}
              // onAfterChange={handlePriceRangeChange}
              allowCross={false} // This prevents handles from crossing over
              pushable={1000} // Minimum distance between handles
            />
            <div className="flex flex-col justify-between">
              {/* <span className="">Price in Lakhs</span> */}
              <div className="flex justify-between mt-1 text-xs text-gray-600">
                <span>₹{initialPriceRange[0].toLocaleString()}</span>
                <span>₹{initialPriceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </ConfigProvider>
        
      </div>

      <div className="flex flex-col gap-2 items-start justify-center">
        <h3 className="text-sm font-normal my-1">
          Operating Weight (Ton Class)
        </h3>
        {filterData?.map((opt) => (
          <div key={opt.key} className="flex items-center space-x-2">
            <Checkbox
              onClick={() => handleCheckbox(opt)}
              id={opt.key}
              className="text-sm data-[state=checked]:bg-lightblue data-[state=checked]:border-lightblue text-white"
            />
            <label
              htmlFor={opt.key}
              className="text-sm text-black cursor-pointer"
              onClick={() => handleCheckbox(opt)}
            >
              {opt.value}
            </label>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 items-start justify-center">
        <h3 className="text-sm font-normal my-1">Brand</h3>
        {brands?.map((opt) => (
          <div key={opt.id} className="flex items-center space-x-2">
            <Checkbox
              onClick={() => handleCheckbox(opt)}
              id={opt.id}
              className="data-[state=checked]:bg-lightblue data-[state=checked]:border-lightblue text-white"
            />
            <label
              htmlFor={opt.id}
              onClick={() => handleCheckbox(opt)}
              className="text-sm text-black cursor-pointer"
            >
              {opt.brand_name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
