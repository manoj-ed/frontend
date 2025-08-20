import React from "react";
import { IoTriangleSharp } from "react-icons/io5";
// import { getCategoryData } from "../../utils/buyNew";
import { usePathname, useRouter } from "next/navigation";

const DropDown = ({ categories }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const categorieHandleClick = (id) => {
    router.push(`/buynew/subcategorydisplay/${id}`);
  };

  return (
    <div>
      <div className="w-full">
        {/* <ProductDetails /> */}
        <div className="relative group inline-block">
          {/* Button */}
          <button className="relative px-4 py-2 text-black cursor-pointer transition-colors duration-300 hover:text-orange-600">
            <div className="flex items-center justify-evenly gap-3">
              Category
              <IoTriangleSharp className="mt-1 rotate-90 w-[10px] h-[10px] text-gray-500 transition-all duration-300 group-hover:rotate-180 group-hover:text-orange-500" />
            </div>

            <span
              className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-orange transition-all duration-300 ${
                isActive("/buynew") ? "w-4/5" : "w-0 group-hover:w-4/5"
              }`}
            ></span>
          </button>

          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-1 w-60 bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
            <div className="block w-full">
              {categories.map((category, index) => (
                <div
                  onClick={() => {
                    categorieHandleClick(category.id);
                  }}
                  key={index}
                  className="block px-4 py-2 cursor-pointer hover:bg-orange-50 transition-all duration-300 group/item"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 group-hover/item:text-orange-600 transition-colors duration-300">
                      {category.category_name}
                    </span>
                    <IoTriangleSharp className="rotate-90 w-[10px] h-[10px] text-gray-500 transition-all duration-300 group-hover/item:rotate-[180deg] group-hover/item:text-orange-500" />
                  </div>

                  {/* Underline always on hover */}
                  <span className="block w-0 h-[2px] bg-orange transition-all duration-300 group-hover/item:w-full mt-1"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
