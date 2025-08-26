"use client";
import { useState } from "react";
import { X, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import Button from "../button";

export default function CompareModal({ open, onClose }) {
  // category collapse/expand track karne ke liye
  const [openCats, setOpenCats] = useState({});

  // dummy categories + products
  const categories = [
    {
      name: "Excavators",
      products: [
        {
          name: "Sany SY210C-9",
          image:
            "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753850284/Equipments%20Dekho/Earthmoving/Excavator/Manitou/EM-SS-MNT-1700R_1.webp.webp",
        },
        {
          name: "CAT 320D3",
          image:
            "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753850284/Equipments%20Dekho/Earthmoving/Excavator/Manitou/EM-SS-MNT-1700R_1.webp.webp",
        },
      ],
    },
    {
      name: "Loaders",
      products: [
        {
          name: "JCB 432ZX",
          image:
            "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753850284/Equipments%20Dekho/Earthmoving/Excavator/Manitou/EM-SS-MNT-1700R_1.webp.webp",
        },
        {
          name: "Volvo L90F",
          image:
            "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753850284/Equipments%20Dekho/Earthmoving/Excavator/Manitou/EM-SS-MNT-1700R_1.webp.webp",
        },
      ],
    },
    {
      name: "Cranes",
      products: [
        {
          name: "Tata Crane 1",
          image:
            "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753850284/Equipments%20Dekho/Earthmoving/Excavator/Manitou/EM-SS-MNT-1700R_1.webp.webp",
        },
      ],
    },
  ];

  if (!open) return null;

  return (
    <div className="fixed top-0 right-0 w-2/6 h-full z-50 flex justify-end">
      {/* Sidebar Modal */}
      <div className="bg-white h-full w-full max-w-sm shadow-2xl flex flex-col p-5 relative animate-slideIn">
        {/* Close */}
        <button
          className="absolute top-5 right-5 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold border-b pb-3">Compare</h2>

        {/* content */}
        <div className="mt-4 flex-1 overflow-y-auto scroll-hidden pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
          {categories.map((cat, i) => {
            const isOpen = openCats[i] ?? true; 

            return (
              <div key={i} className="mb-4 border-b-[1px] border-[#f264227d] pb-1">
                {/* Category Header */}
                <div
                  className="flex  justify-between items-center mb-2 cursor-pointer select-none"
                  onClick={() =>
                    setOpenCats((prev) => ({ ...prev, [i]: !isOpen }))
                  }
                >
                  <h3 className="font-medium text-gray-700">
                    {cat.name}{" "}
                    {cat.products.length > 0 && (
                      <span className="text-xs text-orange">
                        ({cat.products.length})
                      </span>
                    )}
                  </h3>
                  {isOpen ? (
                    <ChevronDown size={18} className="text-orange" />
                  ) : (
                    <ChevronRight size={18} className="text-gray-600 hover:text-orange" />
                  )}
                </div>

                {/* Product List (Collapsible) */}
                {isOpen && (
                  <div className="space-y-3 transition-all duration-300">
                    {cat.products.length > 0 ? (
                      cat.products.map((item, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between border rounded-lg p-2 hover:shadow-sm transition"
                        >
                          <div className="flex items-center gap-3">
                            <input type="checkbox" className="cursor-pointer" />
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-14 h-14 object-cover rounded"
                            />
                            <span className="text-sm font-medium">
                              {item.name}
                            </span>
                          </div>
                          <button className="text-red-500 hover:text-red-600">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 italic">
                        No items added yet
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-5 space-y-3">
          <Button
            text={"Compare"}
            style={
              "py-2 w-full rounded-xl text-medium font-normal group-hover:bg-orange group-hover:text-white transition-colors duration-300"
            }
          />
          {/* <button className="w-full py-2 rounded-xl bg-orange text-white font-medium hover:bg-orange-600 transition">
            Compare
          </button> */}
          <button className="w-full py-2 rounded-xl border border-red-400 text-red-500 font-medium hover:bg-red-50 transition">
            Clear
          </button>
          <p className="text-xs text-gray-500 text-center">
            At least 2 items must be select to compare.
          </p>
        </div>
      </div>
    </div>
  );
}
