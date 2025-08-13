"use client";

import React, { useEffect, useState } from "react";
// import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector } from "react-redux";
import { getSubCategoryData } from "@/app/utils/buyNewAPI";
import { Slider, ConfigProvider } from "antd";

const Aside = ({ paramsData, filtterData }) => {
  console.log("params data", paramsData);
  const [price, setPrice] = useState(200);

  const { brands, filterData } = useSelector((state) => state.product);
  const [disabled, setDisabled] = useState(false);

  const [filters, setFilters] = useState({
    operating_weight: "",
    brand_name: "",
    engine_power: null,
    price: "",
  });

  const [range, setRange] = useState([200, 800]);

  const [priceRange, setPriceRange] = useState([200, 500]); // start with two values

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
        if (opt.key === "price") {
          updated.price = opt.value || null;
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

  // OnSlide Handle Price Slider Filter
  const handlePrice = async (val) => {
    console.log("new Price", val);
    const newPrice = val.toString();
    setPrice(newPrice);

    const updatedFilters = { ...filters, price: newPrice };
    setFilters(updatedFilters);

    const response = await getSubCategoryData(paramsData, updatedFilters);
    filtterData(response);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSubCategoryData(paramsData, filters);
        filtterData(response);
        console.log("API Response:", response);
      } catch (err) {
        console.error("API error:", err);
      }
    };
    fetchData();
  }, [filters]);

  console.log("Final object:", filters);

  const handleChange = (value) => {
    let [min, max] = value;

    console.log("min", min);
    console.log("max", max);

    // Prevent min from going above max

    //  if (min == max) {
    //   disabled = true
    // }

    if (min > max) min = max;
    // Prevent max from going below min
    if (max < min) max = min;

    setRange([min, max]);
  };

  return (
    <div className="w-full flex py-5 flex-col gap-2 items-start justify-center p-4 border border-gray-300 rounded-md  hover:shadow-lg transition-shadow duration-300">
      <div className="w-full z-10">
        <div className="flex pb-3 gap-2 items-start justify-between">
          <h3 className="text-sm font-semibold">Price (In Lakhs)</h3>
          <h3 className="text-sm font-semibold">₹{price}</h3>
        </div>
        {/* <Slider range defaultValue={[20, 50]} disabled={disabled} /> */}
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
              min={100}
              max={1000}
              step={100}
              value={priceRange}
              onChange={(value) => {
                setPriceRange(value);
                handleChange(value);
              }}
            />
            <p>
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </p>
          </div>
        </ConfigProvider>
        {/* <PriceRange /> */}
        {/* <Slider
          onValueChange={(val) => handlePrice(val[0])}
          defaultValue={[33]}
          max={1000}
          step={100}
        /> */}
      </div>
      <div className="flex flex-col gap-2 items-start justify-center">
        <h3 className="text-sm font-normal my-1">
          Operating Weight  (Ton Class)
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
              className="text-sm text-black"
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
              className="text-sm text-black"
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
