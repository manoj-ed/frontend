"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import DisplayCategory from "../components/buyNow/displayCategory";
import DropDown from "../components/common/navbar/dropDown";
import { getCategoryData } from "../utils/buyNewAPI";


const page = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategoryData();

      setCategories(data);
    }

    fetchCategories();
  }, []);


  return (
    <div className="overflow-x-hidden ">
      {/* Menu */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-10 py-4">
          {/* Menu */}
          <div>
            <Link href="/buynew/about">About Us</Link>
          </div>
          <div>
            <Link href="/rent">Rent</Link>
          </div>
          <div className="w-auto">
            <DropDown categories={categories} />
          </div>
          <div>
            <Link href="/buy-used">Buy Used</Link>
          </div>
          <div>
            <Link href="/newsroom">Newsroom</Link>
          </div>
          <div>
            <Link href="/contact-us">Contact Us</Link>
          </div>
          <div>
            <Link href="/services">Services</Link>
          </div>
        </div>
      </div>

      {/* Display Category */}
      <DisplayCategory />
    </div>
  );
};

export default page;
