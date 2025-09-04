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
  const [showFullDesc, setShowFullDesc] = useState(false);

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
    <div className=" flex flex-col px-5 lg:px-10 py-7 gap-4 w-full max-w-6xl mx-auto">
      {/* Category Description */}
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
            {"Category Name"}
          </h1>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {showFullDesc ? (
              <>
                {"This brand"} is known for durable and reliable equipment
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
                  {"This brand"} is known for durable and reliable equipment
                  trusted by businesses worldwide. With a legacy of quality, the
                  company delivers products that combine innovation,
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

      {/* Subcategory List */}
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {subCategoryData?.map((subCategory) => (
            <div
              onClick={() => {
                categorieHandleClick(subCategory.id, subCategory);
              }}
              key={subCategory.id}
              className="group relative flex flex-col items-center justify-center w-full rounded-2xl border border-orange-300/40 bg-white/30 backdrop-blur-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-4deg)]"
            >
              {/* Image Section with Zoom & Gradient Overlay */}
              <div className="relative w-full overflow-hidden">
                <Image
                  // className="rounded-t-2xl object-contain w-[200px] md:w-[360px] h-[80px] md:h-[160px] transform group-hover:scale-110 transition-transform duration-500"
                  className="rounded-t-2xl object-contain w-[200px] md:w-[360px] transform group-hover:scale-110 transition-transform duration-500"
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
              <div className="relative flex items-center justify-center w-full py-2 ">
                <p className="relative font-medium bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-base tracking-wide group-hover:tracking-wider transition-all duration-300">
                  {subCategory.sub_category_name}
                  {/* Glowing Underline */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] h-[3px] w-0 rounded-full bg-orange shadow-[0_0_10px_rgba(255,102,0,0.7)] group-hover:w-4/5 transition-all duration-500"></span>
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
