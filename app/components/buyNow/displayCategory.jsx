"use client";

import React, { useEffect, useState } from "react";
import { getCategoryData } from "../../utils/buyNewAPI";
import Image from "next/image";
import CategoryProduct from "./filterCategory/subCategoryProduct";
import { useRouter } from "next/navigation";
import { setCategoryId } from "@/app/store/productSlice/product";
import test from "../../../public/test.png";

const DisplayCategory = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  const [showFullDesc, setShowFullDesc] = useState(false);

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

  console.log("categories", categories);

  const categorieHandleClick = (id) => {
    localStorage.setItem("categoryId", id.toString());
    router.push(`/buynew/subcategorydisplay/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center py-7 gap-5 w-full px-5">
      {/* Display Categories Box*/}
      {/* <div className="flex items-center justify-center gap-4 w-full px-5 md:px-20 lg:px-40"> */}
      <div className="max-w-6xl grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-4 w-full">
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
                className="rounded-[10, 10, 0, 0] w-[180px] md:h-[110px] lg:h-[150px] h-[120px] sm:w-[170px] md:w-[228px] object-cover transition-transform duration-500 group-hover:scale-105"
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
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-4/5"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Category Description */}
      <div className="">
        <section className="bg-white w-full rounded-lg shadow-sm p-3 md:p-4 flex flex-col md:flex-row items-start md:gap-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <span className="text-gray-400 text-xs">Logo</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800 md:hidden">
              {"Category Name"}
            </h1>
          </div>
          <div>
            <h1 className="hidden md:block text-xl font-semibold text-gray-800">
              {"Sub Category Name"}
            </h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {showFullDesc ? (
                <>
                  {"This Sub Category"} is known for durable and reliable equipment
                  trusted by businesses worldwide. With a legacy of quality, the
                  company delivers products that combine innovation,
                  functionality, and long-lasting performance. Customers across
                  industries prefer this brand because of its consistency and
                  customer-first approach. Each product goes through rigorous
                  testing and quality checks to ensure the highest standards.
                  <br />
                  Their commitment to sustainability and innovation makes them a
                  trusted choice globally.
                </>
              ) : (
                <>
                  <span className="line-clamp-2">
                    {"This Sub Category"} is known for durable and reliable equipment
                    trusted by businesses worldwide. With a legacy of quality,
                    the company delivers products that combine innovation,
                    functionality, and long-lasting performance...
                  </span>
                </>
              )}
            </p>
            {!showFullDesc && (
              <button
                onClick={() => setShowFullDesc(true)}
                className="mt-3 text-sm bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition"
              >
                View More
              </button>
            )}
          </div>
        </section>
      </div>

      {/* Display Products and filters */}
      <div className="w-full max-w-7xl mx-auto ">
        <CategoryProduct />
      </div>
    </div>
  );
};

export default DisplayCategory;
