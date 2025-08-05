"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

function ProductDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const allCategories = useSelector((state) => state.product.allCategory);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (Array.isArray(allCategories)) {
      setCategory(allCategories);
    }
  }, [allCategories]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (selectedValue) => {
    setSelectedCategory(selectedValue);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-center">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between items-center gap-1 w-full rounded-md shadow-sm px-4 py-2 bg-white text-lg font-medium text-neutral-900 hover:bg-gray-50"
        >
          {selectedCategory}
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute -right-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {category.map((option, index) => (
              <Link
                key={index}
                href={`/categorywise-product-list/${option.name}-${option._id}`}
                onClick={() => selectOption(option.name)}
                className="block px-4 py-2 border text-sm text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer transition-all"
              >
                {option.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
