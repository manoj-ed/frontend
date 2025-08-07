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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-5 md:px-0 content-center items-center justify-center gap-5 w-full">
          {subCategoryData?.map((subCategory) => (
            <div
              onClick={() => {
                categorieHandleClick(subCategory.id, subCategory);
              }}
              className="flex w-full border-[0.5px] hover:text-orange border-orange cursor-pointer items-center justify-center flex-col bg-lightblue md:bg-white rounded-xl shadow-sm hover:shadow-md dark:bg-gray-800 dark:border-gray-700"
              key={subCategory.id}
            >
              <Image
                className=" rounded-t-xl border-b-[0.5px] border-orange object-cover w-[250px] md:w-[350px] h-[80px] md:h-[150px]"
                src={subCategory?.category_image}
                // src="https://res.cloudinary.com/dqnbzaiu2/image/upload/v1754393580/PV-AP-API-WM_6_HES_qvsniy.webp"
                alt={`sub Categoy icon`}
                width={0}
                height={0}
                sizes="100vw"
              />
              {/* <Image
                className=" rounded-t-xl border-b-[0.5px] border-orange object-cover w-[250px] md:w-[350px] h-[150px] "
                src={subCategory?.category_image}
                alt="Menu Icon"
                width={0}
                height={0}
                sizes="100vw"
              /> */}
              <div className="flex items-center justify-center  w-full">
                <p className="normal-case p-1 md:p-2 font-semibold">
                  {subCategory.sub_category_name}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* {subCategoryData.map((subCategory) => (
          <div key={subCategory.id} className="p-4">
            <p>{subCategory.sub_category_name}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Page;
