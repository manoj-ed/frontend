"use client";
import React, { useState, useEffect } from "react";
import backgroundImg from "@/public/Breadcrumbs/13.png"

const Breadcrumbs = ({ equipName, categoryName, subCategoryName, description }) => {
  const [showFull, setShowFull] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  console.log("Category Name in breadcrumb", categoryName);
  console.log("SubCategory Name in breadcrumb", subCategoryName);
  console.log("Equip Name in breadcrumb", equipName);
  console.log("Category ID in breadcrumb", categoryId);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCategoryId(localStorage.getItem("category_id"));
    }
  }, []);

  return (
    <div className="relative h-40 rounded-xl overflow-hidden w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            // `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1350&q=80')`,
            `url(${backgroundImg.src})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Breadcrumbs */}
      <div className="absolute inset-0 gap-2 px-6 flex flex-col items-start justify-start w-full">
        <ol className="flex items-center space-x-2 pt-4 text-xs font-medium text-offWhite">
          <li>
            <a href="/" className="hover:text-orange-400 hover:underline transition-all">
              Home
            </a>
          </li>
          <li className="text-gray-300">/</li>
          <li>
            <a href="/buynew" className="hover:text-orange-400 hover:underline transition-all">
              Buy New
            </a>
          </li>
          {categoryId && (
            <>
              <li className="text-gray-300">/</li>
              <li>
                <a
                  href={`/buynew/subcategorydisplay/${categoryId}`}
                  className="text-orange-400 underline"
                >
                  {categoryName}
                </a>
              </li>
            </>
          )}
          {subCategoryName && (
            <>
              <li className="text-gray-300">/</li>
              <li>
                <a
                  href={`/buynew/${encodeURIComponent(subCategoryName)}`}
                  className="text-orange-400 underline"
                >
                  {subCategoryName}
                </a>
              </li>
            </>
          )}
        </ol>

        {/* Title + Description */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            Buy New {subCategoryName || categoryName || "Equipment"}
          </h1>
          <div>
            <p className={`text-sm text-white ${showFull ? "" : "line-clamp-2"}`}>
              {description}
            </p>
            {description?.length > 80 && (
              <button
                onClick={() => setShowFull(!showFull)}
                className="text-orange-400 cursor-pointer text-xs font-medium mt-1 hover:underline transition-all duration-300"
              >
                {showFull ? "View Less" : "View More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
