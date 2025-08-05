import React from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector } from "react-redux";


const Aside = () => {

  const { brands, filterData } = useSelector((state) => state.product);

  const options = [
    { id: "Mini (0–5 Ton)", label: "Mini (0–5 Ton)" },
    { id: "Small (6–10 Ton)", label: "Small (6–10 Ton)" },
    { id: "Medium (11–20 Ton)", label: "Medium (11–20 Ton)" },
    { id: "Heavy (21–30 Ton)", label: "Heavy (21–30 Ton))" },
    { id: "Super Heavy (30+ Ton)", label: "Super Heavy (30+ Ton)" },
  ];
  const brand = [
    { id: "JCB", label: "JCB" },
    { id: "Tata Hitachi", label: "Tata Hitachi" },
    { id: "CAT (Caterpillar)", label: "CAT (Caterpillar)" },
    { id: "Komatsu", label: "Komatsu" },
    { id: "Hyundai", label: "Hyundai" },
    { id: "Kobelco", label: "Kobelco" },
    { id: "Volvo", label: "Volvo" },
    { id: "SANY", label: "SANY" },
    { id: "Doosan", label: "Doosan" },
    { id: "L&T", label: "L&T" },
    { id: "Other", label: "Other" },
  ];
  return (
    <div className="w-full flex py-5 flex-col gap-2 items-start justify-center p-4 border border-gray-300 rounded-md  hover:shadow-lg transition-shadow duration-300">
      <div className="w-full z-10">
        <div className="flex pb-3 gap-2 items-start justify-between">
          <h3 className="text-sm font-semibold">Price (In Lakhs)</h3>
          <h3 className="text-sm font-semibold">₹0 - 1000</h3>
        </div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      <div className="flex flex-col gap-2 items-start justify-center">
        <h3 className="text-sm font-normal my-1">
          Operating Weight  (Ton Class)
        </h3>
        {filterData?.map((opt) => (
          <div key={opt.key} className="flex items-center space-x-2">
            <Checkbox
              id={opt.key}
              className="text-sm data-[state=checked]:bg-lightblue data-[state=checked]:border-lightblue text-white"
            />
            <label htmlFor={opt.id} className="text-sm text-black">
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
              id={opt.id}
              className="data-[state=checked]:bg-lightblue data-[state=checked]:border-lightblue text-white"
            />
            <label htmlFor={opt.id} className="text-sm text-black">
              {opt.brand_name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
