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
import ViewMoreButton from "../../common/ViewMoreButton";

const CategoryProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const paramsData = searchParams.get("data");

  const [productData, setProductData] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState([]);
  const [activeFilter, setActiveFilter] = useState("New");
  const [page, setPage] = useState({ page: 1 });
  const [lastPage, setLastPage] = useState(null);
  const [isLastPage, setIsLastPage] = useState(false);

  const filters = ["New", "Low - High", "High - Low", "Rating"];

  // ON Product Click Handler
  const handleProductClick = async (clickedProduct) => {
    console.log("clicked product hander", clickedProduct);
    try {
      const encodedData = encodeURIComponent(JSON.stringify(clickedProduct));
      router.push(`/buynew/product?data=${encodedData}`);
    } catch (err) {
      console.error("Error on product click:", err);
    }
  };

  // Handle Filter Data onclick Filter aside
  const handleFilterData = (filterData) => {
    setProductData(filterData.data);
    setLastPage(filterData.last_page);
    if (filterData.last_page === 1) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
    // setPage({ page: 1 }); // Reset to first page on new filter
    console.log("data from fillter", filterData);
  };

  // Function to short by Asc and Des
  const sortFilter = async (filter) => {
    let sortObj = {};

    if (filter === "Low - High") sortObj = { sort_price: "asc" };
    else if (filter === "High - Low") sortObj = { sort_price: "desc" };

    const response = await getSubCategoryData(paramsData, sortObj);
    if (!response) return;

    setActiveFilter(filter);
    setProductData(response.data);
    console.log("response", response);
    console.log("data from filter", filter);
  };

  // Pageination On Click View More button
  const pagination = async () => {
    const nextPage = { page: page.page + 1 };

    const response = await getSubCategoryData(paramsData, nextPage);
    if (!response) return;

    setPage(nextPage);
    setProductData((prev) => [...prev, ...response.data]);

    // Check if this is the last page
    if (nextPage.page >= lastPage) {
      setIsLastPage(true); // last page reached
    }
  };

  useEffect(() => {
    async function fetchSubCategories() {
      const response = await getSubCategoryData(paramsData);
      if (!response) return;
      console.log("respone", response);

      setSubCategoryName(response?.sub_category_name);
      setLastPage(response?.last_page);

      const { data, brands, operating_weight } = response;

      setProductData(data?.slice(0, 12));

      dispatch(setBrands(brands));
      dispatch(setFilterData(operating_weight));
      dispatch(setAllSubCategoryData(data));
    }

    fetchSubCategories();
  }, []);

  console.log("productData", productData);
  console.log("last page", lastPage);

  return (
    <div className="w-full p-5 gap-4">
      <div className="w-full place-items-start place-content-center grid md:grid-cols-4 gap-4 md:gap-10">
        <h2 className="block md:hidden text-2xl py-1 px-3 rounded-md uppercase bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 font-medium shadow-sm">
          {subCategoryName}
        </h2>
        <div className="w-full">
          <Aside paramsData={paramsData} filtterData={handleFilterData} />
        </div>
        <div className="flex w-full flex-col items-center justify-center md:col-span-3">
          <div className="w-full flex pb-4 items-center justify-between">
            {/* Subcategory Name */}
            <h2 className="hidden md:block text-xs lg:text-sm py-1 px-3 rounded-md uppercase bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 font-medium shadow-sm">
              {subCategoryName}
            </h2>

            {/* Filter Buttons */}
            <div className="flex gap-3 justify-center items-center">
              {filters.map((filter, idx) => {
                const isActive = activeFilter === filter;
                return (
                  <div
                    key={idx}
                    onClick={() => sortFilter(filter)}
                    className={`group relative cursor-pointer flex items-center gap-1 justify-center text-xs lg:text-sm py-1 px-3 rounded-md transition-all duration-300
                ${
                  isActive
                    ? "bg-orange text-white shadow-md scale-[1.03]"
                    : "bg-[#f5f5f5] text-[#757575] hover:bg-gradient-to-r hover:from-orange-100 hover:to-orange-50 hover:text-orange-700 hover:shadow-md"
                }
              `}
                  >
                    {/* Show FaCheck only if active */}
                    {isActive && (
                      <span className="transition-transform duration-300">
                        <FaCheck />
                      </span>
                    )}

                    <button className="tracking-wide cursor-pointer">{filter}</button>

                    {/* Hover/Active underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-orange-700 rounded-full transition-all duration-300
                  ${isActive ? "w-4/5" : "w-0 group-hover:w-4/5"}
                `}
                    ></span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            {productData && productData.length > 0 ? (
              <div className="flex flex-col items-end gap-10">
                <ProductCard
                  style={"grid-cols-2 sm:grid-cols-2 md:grid-cols-3 "}
                  productData={productData}
                  onProductClick={handleProductClick}
                />

                {/* View More button */}
                {!isLastPage && (
                  <ViewMoreButton text="View More" onClick={pagination} />
                )}
              </div>
            ) : (
              <div>No product Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
