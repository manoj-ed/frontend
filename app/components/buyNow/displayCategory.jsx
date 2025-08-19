"use client";

import React, { useEffect, useState } from "react";
import { getCategoryData } from "../../utils/buyNewAPI";
import Image from "next/image";
import CategoryProduct from "./filterCategory/subCategoryProduct";
import { useRouter } from "next/navigation";
import { setCategoryId } from "@/app/store/productSlice/product";

const DisplayCategory = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategoryData();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  if (!categories || categories.length === 0) {
    return (
      <div className="flex items-center justify-center py-5">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  console.log("categories", categories)

  const categorieHandleClick = (id) => {
    localStorage.setItem("categoryId", id.toString());
    router.push(`/buynew/subcategorydisplay/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center py-7 gap-4 w-full ">
      {/* Display Categories Box*/}
      <div className="flex items-center justify-center gap-4 w-full px-5 md:px-20 lg:px-40">
        {categories?.map((categorie) => (
          <div
            onClick={() => {
              categorieHandleClick(categorie.id);
            }}
            key={categorie.id}
            className="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-orange bg-gradient-to-b from-orange-50 to-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl overflow-hidden"
          >
            {/* Glow overlay */}
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

            {/* Image with shimmer sweep */}
            <div className="relative">
              <Image
                className="rounded-[10, 10, 0, 0] w-[180px] md:h-[180px] h-[110px] sm:w-[170px] md:w-[228px] object-fill transition-transform duration-500 group-hover:scale-105"
                src={categorie?.category_image}
                alt="Category Image"
                width={0}
                height={0}
                sizes="100vw"
              />

              {/* Shimmer light */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
            </div>

            {/* Title */}
            <div className="flex items-center justify-center py-[2px] w-full relative">
              <p className="normal-case px-3 py-1 font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
                {categorie.category_name}
              </p>

              {/* Underline expanding from center */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-4/5"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Display Products and filters */}
      <div className="w-full max-w-7xl mx-auto ">
        <CategoryProduct />
      </div>
    </div>
  );
};

export default DisplayCategory;
