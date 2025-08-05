"use client";

import React, { useEffect, useState } from "react";
import { getCategoryData } from "../../utils/buyNewAPI";
import Image from "next/image";
import CategoryProduct from "./filterCategory/subCategoryProduct";
import { useRouter } from "next/navigation";


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

  const categorieHandleClick = (id) => {
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
            className="flex cursor-pointer items-center justify-center flex-col bg-lightblue md:bg-white rounded-xl"
            key={categorie.id}
          >
            <Image
              className="rounded-xl w-[180px] md:h-[180px] h-[110px] object-fill sm:w-[170px] md:w-[228px]"
              src={categorie?.category_image}
              // src={categoryimage}
              alt="Menu Icon"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="flex items-center justify-center py-[2px] w-full">
              <p className="normal-case px-3">{categorie.category_name}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-4 w-full px-5 md:px-0 ">
        <div className="flex cursor-pointer items-center justify-center flex-col bg-lightblue md:bg-white rounded-xl">
          <Image
            className="rounded-xl w-[180px] md:h-[180px] h-[110px] object-fill sm:w-[170px] md:w-[228px]"
            // src={categorie?.category_image}
            src={categoryimage1}
            alt="Menu Icon"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="flex items-center justify-center py-[2px] w-full">
            <p className="normal-case px-3">Category Name</p>
          </div>
        </div>
        <div className="flex cursor-pointer items-center justify-center flex-col bg-lightblue md:bg-white rounded-xl">
          <Image
            className="rounded-xl w-[180px] md:h-[180px] h-[110px] object-fill sm:w-[170px] md:w-[228px]"
            // src={categorie?.category_image}
            src={categoryimage2}
            alt="Menu Icon"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="flex items-center justify-center py-[2px] w-full">
            <p className="normal-case px-3">Category Name</p>
          </div>
        </div>
        <div className="flex cursor-pointer items-center justify-center flex-col bg-lightblue md:bg-white rounded-xl">
          <Image
            className="rounded-xl w-[180px] md:h-[180px] h-[110px] object-fill sm:w-[170px] md:w-[228px]"
            // src={categorie?.category_image}
            src={categoryimage3}
            alt="Menu Icon"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="flex items-center justify-center py-[2px] w-full">
            <p className="normal-case px-3">Category Name</p>
          </div>
        </div>
        <div className="flex cursor-pointer items-center justify-center flex-col bg-lightblue md:bg-white rounded-xl">
          <Image
            className="rounded-xl w-[180px] md:h-[180px] h-[110px] object-fill sm:w-[170px] md:w-[228px]"
            // src={categorie?.category_image}
            src={categoryimage4}
            alt="Menu Icon"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="flex items-center justify-center py-[2px] w-full">
            <p className="normal-case px-3">Category Name</p>
          </div>
        </div>
        <div className="flex cursor-pointer items-center justify-center flex-col bg-lightblue md:bg-white rounded-xl">
          <Image
            className="rounded-xl w-[180px] md:h-[180px] h-[110px] object-cover sm:w-[170px] md:w-[228px]"
            // src={categorie?.category_image}
            src={categoryimage5}
            alt="Menu Icon"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="flex items-center justify-center py-[2px] w-full">
            <p className="normal-case px-3">Category Name</p>
          </div>
        </div>
      </div> */}

      {/* Display Products and filters */}
      <div className="w-full max-w-7xl mx-auto py-5">
        <CategoryProduct />
      </div>
    </div>
  );
};

export default DisplayCategory;
