"use client";

import React, { useEffect, useState } from "react";
import { getCategoryData } from "../utils/userAPI";
import Image from "next/image";
import { useRouter } from "next/navigation";


const page = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  const categorieHandleClick = (id, category_name) => {
    localStorage.setItem("category_id", id.toString());
    localStorage.setItem("categoryName", category_name);
    router.push(`/buynew/subcategorydisplay/${id}`);
  };

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategoryData();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <div className="flex justify-center py-5 px-5">
      <div className="max-w-6xl grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-4 w-full">
        {categories?.map((categorie) => (
          <div
            onClick={() => {
              categorieHandleClick(categorie.id, categorie.category_name);
            }}
            key={categorie.id}
            className="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-orange bg-gradient-to-b from-orange-50 to-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl overflow-hidden"
          >
            {/* Glow overlay */}
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

            {/* Image with shimmer sweep */}
            <div className="relative">
              <Image
                // className="rounded-[10, 10, 0, 0] w-[180px] md:h-[110px] lg:h-[150px] h-[120px] sm:w-[170px] md:w-[228px] object-cover transition-transform duration-500 group-hover:scale-105"
                className="rounded-[10, 10, 0, 0] h-auto w-[180px]  lg:h-[150px]  sm:w-[170px] md:w-[228px] object-cover transition-transform duration-500 group-hover:scale-105"
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
              <div className="flex flex-col items-center gap-0 px-3">
                <p className="normal-case  font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
                  {categorie.category_name}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm leading-4 line-clamp-2">
                  {categorie.description}
                </p>
              </div>

              {/* Underline expanding from center */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-4/5"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
