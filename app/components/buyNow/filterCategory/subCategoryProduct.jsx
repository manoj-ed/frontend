"use client";

import React, { useEffect, useState } from "react";
import Aside from "./aside";
import ProductCard from "../../common/productCard";
import { FaCheck } from "react-icons/fa";
import { getSubCategoryData } from "@/app/utils/buyNewAPI";
import { useDispatch } from "react-redux";
import {
  setBrands,
  setFilterData,
  setAllSubCategoryData,
} from "@/app/store/productSlice/product";
import { useRouter } from "next/navigation";

const CategoryProduct = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const paramsData = searchParams.get("data");

  const [productData, setProductData] = useState([]);

  // ON Product Click Handler
  const handleProductClick = async (clickedProduct) => {

      console.log("clicked product hander", clickedProduct)
    try {
      const encodedData = encodeURIComponent(JSON.stringify(clickedProduct));
      router.push(`/buynew/product?data=${encodedData}`);
    } catch (err) {
      console.error("Error on product click:", err);
    }
  };

  useEffect(() => {
    async function fetchSubCategories() {
      const response = await getSubCategoryData(paramsData);

      if (!response) return;

      const { data, brands, operating_weight } = response;

      setProductData(data?.slice(0, 11));

      dispatch(setBrands(brands));
      dispatch(setFilterData(operating_weight));
      dispatch(setAllSubCategoryData(data));
    }

    fetchSubCategories();
  }, []);

  return (
    <div className="w-full p-5 gap-4">
      <div className="w-full place-items-start place-content-center grid md:grid-cols-4 gap-4 md:gap-10">
        <h2 className="block md:hidden text-2xl py-1 px-2 rounded-md uppercase bg-offWhite font-semibold">
          EXCAVATORS
        </h2>
        <div className="w-full">
          <Aside />
        </div>
        <div className="flex flex-col items-center justify-center md:col-span-3">
          <div className="w-full flex pb-4 items-center justify-between">
            <h2 className="hidden md:block text-xs lg:text-sm py-1 px-2 rounded-md uppercase bg-offWhite font-semibold">
              EXCAVATORS
            </h2>
            <div className="flex gap-3 justify-center items-center">
              <div className="bg-black cursor-pointer flex items-center gap-1 justify-center text-xs lg:text-sm text-white py-1 px-2 rounded-md">
                <FaCheck className="inline " />
                New
              </div>
              <div className="bg-[#f5f5f5] cursor-pointer flex items-center gap-1 justify-center text-xs lg:text-sm text-[#757575] py-1 px-2 rounded-md">
                Price Ascending
              </div>
              <div className="bg-[#f5f5f5] cursor-pointer flex items-center gap-1 justify-center text-xs lg:text-sm text-[#757575] py-1 px-2 rounded-md">
                Price Descending
              </div>
              <div className="bg-[#f5f5f5] cursor-pointer flex items-center gap-1 justify-center text-xs lg:text-sm text-[#757575] py-1 px-2 rounded-md">
                Rating
              </div>
            </div>
          </div>
          <div>
            <ProductCard
              style={"grid-cols-2 sm:grid-cols-2 md:grid-cols-3 "}
              productData={productData}
              onProductClick={handleProductClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
