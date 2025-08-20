"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategoryData } from "../../utils/buyNewAPI";
import { usePathname } from "next/navigation";
import DropDown from "../../components/common/navbar/dropDown";

const Menu = () => {
  const [categories, setCategories] = useState([]);

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategoryData();

      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div className="hidden md:block">
      <div className="flex items-center justify-center gap-10 pt-1">
        {/* Buy New */}
        <div className="relative group cursor-pointer">
          <Link
            href="/buynew"
            className={`transition-colors duration-300 ${
              isActive("/buynew") ? "text-orange-600" : ""
            }`}
          >
            Buy New
          </Link>
          <span
            className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-orange transition-all duration-300 ${
              isActive("/buynew") ? "w-4/5" : "group-hover:w-4/5 w-0"
            }`}
          ></span>
        </div>

        {/* Rent */}
        <div className="relative group cursor-pointer">
          <Link
            href="/rent"
            className={`transition-colors duration-300 ${
              isActive("/rent") ? "text-orange-600" : ""
            }`}
          >
            Rent
          </Link>
          <span
            className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-orange transition-all duration-300 ${
              isActive("/rent") ? "w-4/5" : "group-hover:w-4/5 w-0"
            }`}
          ></span>
        </div>

        {/* DropDown */}
        <div className="w-auto">
          <DropDown categories={categories} />
        </div>

        {/* Buy Used */}
        <div className="relative group cursor-pointer">
          <Link
            href="/buy-used"
            className={`transition-colors duration-300 ${
              isActive("/buy-used") ? "text-orange-600" : ""
            }`}
          >
            Buy Used
          </Link>
          <span
            className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-orange transition-all duration-300 ${
              isActive("/buy-used") ? "w-4/5" : "group-hover:w-4/5 w-0"
            }`}
          ></span>
        </div>

        {/* Newsroom */}
        <div className="relative group cursor-pointer">
          <Link
            href="/newsroom"
            className={`transition-colors duration-300 ${
              isActive("/newsroom") ? "text-orange-600" : ""
            }`}
          >
            Newsroom
          </Link>
          <span
            className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-orange transition-all duration-300 ${
              isActive("/newsroom") ? "w-4/5" : "group-hover:w-4/5 w-0"
            }`}
          ></span>
        </div>

        {/* Contact Us */}
        <div className="relative group cursor-pointer">
          <Link
            href="/contact-us"
            className={`transition-colors duration-300 ${
              isActive("/contact-us") ? "text-orange-600" : ""
            }`}
          >
            Contact Us
          </Link>
          <span
            className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-orange transition-all duration-300 ${
              isActive("/contact-us") ? "w-4/5" : "group-hover:w-4/5 w-0"
            }`}
          ></span>
        </div>

        {/* Services */}
        <div className="relative group cursor-pointer">
          <Link
            href="/services"
            className={`transition-colors duration-300 ${
              isActive("/services") ? "text-orange-600" : ""
            }`}
          >
            Services
          </Link>
          <span
            className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-orange transition-all duration-300 ${
              isActive("/services") ? "w-4/5" : "group-hover:w-4/5 w-0"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
