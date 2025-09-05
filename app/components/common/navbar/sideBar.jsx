"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Home, Settings, LogOut, Menu } from "lucide-react";
import DropDown from "./dropDown";
import { getCategoryData } from "@/app/utils/userAPI";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategoryData();

      setCategories(data);
    }

    fetchCategories();
  }, []);

//   console.log("categories", categories);

  const categorieHandleClick = (id) => {
    router.push(`/buynew/subcategorydisplay/${id}`);
  };

  return (
    <>
      {/* Toggle Button */}
      <button onClick={() => setOpen(true)} className="p-1">
        <Menu strokeWidth={2} className="w-7 h-7 text-gray-700" />
      </button>

      {/* Overlay + Sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 flex" onClick={() => setOpen(false)}>
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

          {/* Sidebar Panel */}
          <div
            className={`relative z-50 w-[75%] max-w-xs h-full 
              bg-gradient-to-b from-white to-orange-50 
              shadow-2xl rounded-r-3xl p-6 transform
              transition-transform duration-500
              ${open ? "translate-x-0" : "-translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600 text-3xl"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-6">Menu</h2>

            {/* Menu Items */}

            <ul className="space-y-2 mt-2">
              <div className="flex pb-2 font-semibold">Categories</div>
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg cursor-pointer ml-3 text-gray-700 bg-gray-100 transition-all duration-300"
                >
                  {/* Icon Box */}
                  {/* <span className="w-9 h-9 flex items-center justify-center rounded-md bg-white/60 shadow-sm backdrop-blur">
                    {item.icon}
                  </span> */}

                  <span
                    className="font-medium text-sm"
                    onClick={() => {
                      categorieHandleClick(item.id)
                      setOpen(false)
                    }}
                  >
                    {item.category_name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
