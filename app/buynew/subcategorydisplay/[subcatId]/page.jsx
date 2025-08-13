"use client";

import React, { use, useEffect, useState } from "react";
import { getProductByCategory } from "../../../utils/buyNewAPI";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import subcategorytest from "../../../../public/subcategorytest.jpg"

const Page = ({ params }) => {
  const router = useRouter();
  const categoryId = use(params);

  const [subCategoryData, setSubCategoryData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getProductByCategory(categoryId.subcatId);
      setSubCategoryData(data);
    };
    fetchData();
  }, [categoryId]);

  const categorieHandleClick = (id, subCategory) => {
    const data = {
      category_id: subCategory.category_id,
      sub_category_id: id,
      sub_category_name: subCategory.sub_category_name,
    };
    const encodeddata = encodeURIComponent(JSON.stringify(data));

    router.push(`/buynew/?data=${encodeddata}`);
    // const encodedString = encodeURIComponent(product.product_id);
    // router.push(
    //   `/buynew/${id}?catid=${subCategory.category_id}&subcatid=${subCategory.id}&subcatname=${subCategory.sub_category_name}`
    // );
  };

  if (!subCategoryData || subCategoryData.length === 0) {
    return <div>No subcategory data available</div>;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-7 gap-4 w-full ">
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-5 md:px-0 gap-6 w-full">
  {subCategoryData?.map((subCategory) => (
    <div
      onClick={() => {
        categorieHandleClick(subCategory.id, subCategory);
      }}
      key={subCategory.id}
      className="group relative flex flex-col items-center justify-center w-full rounded-2xl
        border border-orange-300/40 bg-white/30 backdrop-blur-md overflow-hidden
        shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer
        [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-4deg)]"
    >
      {/* Image Section with Zoom & Gradient Overlay */}
      <div className="relative w-full overflow-hidden">
        <Image
          className="rounded-t-2xl object-cover w-[250px] md:w-[350px] h-[90px] md:h-[160px] transform group-hover:scale-110 transition-transform duration-500"
          src={subCategory?.category_image}
          alt={`sub Categoy icon`}
          width={0}
          height={0}
          sizes="100vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Title Section */}
      <div className="relative flex items-center justify-center w-full py-3">
        <p className="relative font-medium bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-base tracking-wide group-hover:tracking-wider transition-all duration-300">
          {subCategory.sub_category_name}
          {/* Glowing Underline */}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] h-[3px] w-0 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,102,0,0.7)] group-hover:w-4/5 transition-all duration-500"></span>
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Page;
