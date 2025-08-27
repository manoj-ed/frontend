"use client";
import { useState } from "react";
import { X, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import Button from "../button";
import { useRouter } from "next/navigation";

export default function CompareModal({ open, onClose }) {
  const router = useRouter();
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
    <div className="fixed top-0 right-0 w-5/6 lg:w-2/6 h-full z-50 flex justify-end">
      {/* Sidebar Modal */}
      <div className="bg-white h-full w-full max-w-sm shadow-2xl flex flex-col p-6 relative animate-slideIn rounded-l-2xl">
        {/* Close */}
        <button
          className="absolute cursor-pointer top-5 right-5 text-gray-400 hover:text-black transition"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-3 flex items-center gap-1">
          <span className="w-1 h-6 bg-orange-500 rounded-sm"></span>
          Compare
        </h2>

        {/* content */}
        <div className="mt-4 flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 scroll-hidden">
          {categories.map((cat, i) => {
            const isOpen = openCats[i] ?? true;

            return (
              <div key={i} className="mb-4 border-b border-gray-200 pb-2">
                {/* Category Header */}
                <div
                  className="flex justify-between items-center mb-2 cursor-pointer select-none group"
                  onClick={() =>
                    setOpenCats((prev) => ({ ...prev, [i]: !isOpen }))
                  }
                >
                  <h3 className="font-medium text-gray-700 group-hover:text-orange-600 transition">
                    {cat.name}{" "}
                    {cat.products.length > 0 && (
                      <span className="text-xs text-orange-500 ml-1">
                        ({cat.products.length})
                      </span>
                    )}
                  </h3>
                  {isOpen ? (
                    <ChevronDown size={18} className="text-orange-500" />
                  ) : (
                    <ChevronRight
                      size={18}
                      className="text-gray-500 group-hover:text-orange-500"
                    />
                  )}
                </div>

                {/* Product List (Collapsible) */}
                {isOpen && (
                  <div className="space-y-3 transition-all duration-300">
                    {cat.products.length > 0 ? (
                      cat.products.map((item, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between bg-gray-50 border rounded-xl p-2 hover:shadow-md transition"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              className="cursor-pointer accent-orange-600 w-4 h-4 rounded"
                            />
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-lg border"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {item.name}
                            </span>
                          </div>
                          <button className="text-red-400 hover:text-red-600 transition cursor-pointer">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400 italic">
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
          <div onClick={() => router.push("/buynew/compare")}>
            <Button text={"Compare"} style={"w-full rounded-md"} />
          </div>
          {/* <button className="w-full py-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
            Compare
          </button> */}
          <button className="w-full py-2 rounded-md border border-red-400 text-red-500 font-medium hover:bg-red-50 transition">
            Clear
          </button>
          <p className="text-xs text-gray-400 text-center">
            At least 2 items must be selected to compare.
          </p>
        </div>
      </div>
    </div>
  );
}
