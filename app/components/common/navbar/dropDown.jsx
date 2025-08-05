import React from "react";
import { IoTriangleSharp } from "react-icons/io5";
// import { getCategoryData } from "../../utils/buyNew";
import { useRouter } from "next/navigation";

const DropDown = ({ categories }) => {

  const router = useRouter();

  const categorieHandleClick = (id) => {
    router.push(`/buynew/subcategorydisplay/${id}`);
  };

  return (
    <div>
      <div className="w-full">
        {/* <ProductDetails /> */}
        <div class="relative group inline-block w-full">
          <button class="px-4 py-2 text-black cursor-pointer">Menu</button>

          <div class="absolute left-0 mt-0 w-60 shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
            <div className="block bg-offWhite w-full">
              {categories.map((category, index) => (
                <div
                  onClick={() => {
                    categorieHandleClick(category.id);
                  }}
                  key={index}
                  class="block px-4 hover:bg-gray-200 w-full items-center justify-center"
                >
                  <div className="flex items-center justify-between">
                    <div className="py-2 cursor-pointer">
                      {category.category_name}
                    </div>
                    <IoTriangleSharp className="rotate-90 w-[10px] h-[10px]" />
                  </div>
                  <div className="w-full h-[0.2] bg-white"></div>
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
