"use client";

import React, { use, useEffect, useState } from "react";
import { getProductByCategory } from "../../../utils/userAPI";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import subcategorytest from "../../../../public/subcategorytest.jpg"
import Description from "@/app/components/common/description";
import TabsDropdown from "@/app/components/common/TabsDropdown";
import BlogCards from "@/app/components/common/blogCard";
import { getBlog } from "@/app/utils/BlogAPI";
import Breadcrumb  from "@/app/components/common/Breadcrumb";

const Page = ({ params }) => {
  const tabs = [
    {
      name: "insurance",
      items: [
        { title: "1. Does Equipments Dekho provide equipment insurance?", content: "Yes, Equipments Dekho partners with trusted insurance providers to offer comprehensive coverage for both new and used construction equipment." },
        { title: "2. How can I get an insurance quote on Equipments Dekho?", content: " Simply click the “Get Insurance Quote” button on the product page, submit your equipment details, and our team will connect you with our insurance partners." },
        { title: "3. What are the benefits of insuring equipment through Equipments Dekho?", content: "With Equipments Dekho, you get customized policies, quick claim processing, and nationwide support, helping protect your machinery and business operations. Protecting your equipment not only reduces financial risk but also ensures continuous project operations without costly downtime. " },
        { title: "4. Who is eligible for equipment insurance via Equipments Dekho?", content: "Insurance is available for contractors, builders, rental companies, and SMEs across India, subject to standard documentation and approval from the insurer." },
      ],
    },
    {
      name: "financing",
      items: [
        { title: "1. Does Equipments Dekho offer equipment financing?", content: "Yes, Equipments Dekho works with trusted financial partners  to provide easy financing options for both new and used equipment." },
        { title: "2. How can I apply for financing on Equipments Dekho?", content: " Simply click on the “Apply for Financing” button on the product page, fill out the form, and our finance team will guide you through the process." },
        { title: "3. What are the benefits of financing through Equipments Dekho?", content: "With our finance partners, you get flexible EMI plans, quick approvals, and nationwide support, making it easier to own or upgrade your equipment." },
        { title: "4. Who is eligible for financing?", content: " Financing is available for contractors, builders, rental companies, and SMEs across India, subject to standard documentation and lender approval." },
      ],
    },
  ];

  const router = useRouter();
  const categoryId = use(params);

  const [subCategoryData, setSubCategoryData] = useState();
  const [blogData, setBlogData] = useState([]);
  const [categoryData, setCategoryData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryId?.subcatId) {
      console.error("Invalid categoryId:", categoryId);
      setError("Invalid category ID");
      return;
    }

    const fetchData = async () => {
      setLoading(true); // start loading
      setError(null); // reset error

      try {
        const [{ data }, blogData] = await Promise.all([
          getProductByCategory(categoryId.subcatId),
          getBlog(),
        ]);

        console.log("subcategory data", data);

        setSubCategoryData(data.subcategories);
        setCategoryData(data.category);
        setBlogData(blogData.data);
      } catch (err) {
        console.error("Error in fetchData:", err);
        setError("Failed to fetch data"); // save error message
      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchData();
  }, [categoryId]);

  console.log("categoryData", categoryData);

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

  console.log("subCategoryData", subCategoryData);

  return (
    <div className=" flex flex-col px-5 lg:px-10 py-7 gap-4 w-full max-w-6xl mx-auto">
      {/* Category Description */}
      {/* <Description
        name={categoryData?.category_name}
        description={categoryData?.description}
      /> */}
      <Breadcrumb categoryName={categoryData?.category_name} description={categoryData?.description}/>
      {/* Subcategory List */}
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {subCategoryData?.map((subCategory) => (
            <div
              onClick={() => {
                categorieHandleClick(subCategory.id, subCategory);
              }}
              key={subCategory.id}
              className="group relative flex flex-col items-center justify-center w-full rounded-md border border-orange-300/40 bg-white/30 backdrop-blur-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-4deg)]"
            >
              {/* Image Section with Zoom & Gradient Overlay */}
              <div className="relative w-full overflow-hidden">
                <Image
                  // className="rounded-t-2xl object-contain w-[200px] md:w-[360px] h-[80px] md:h-[160px] transform group-hover:scale-110 transition-transform duration-500"
                  className="rounded-t-md object-contain w-[200px] md:w-[360px] transform group-hover:scale-110 transition-transform duration-500"
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
              <div className="relative flex flex-col items-center justify-center gap-1 w-full py-2 ">
                <p className="relative font-medium bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-base tracking-wide group-hover:tracking-wider transition-all duration-300">
                  {subCategory.sub_category_name}
                  {/* Glowing Underline */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] h-[3px] w-0 rounded-full bg-orange shadow-[0_0_10px_rgba(255,102,0,0.7)] group-hover:w-4/5 transition-all duration-500"></span>
                </p>
                <p className="line-clamp-2 leading-[1.1rem] text-gray-600 text-sm text-center px-2 group-hover:text-gray-800 transition-colors duration-300">
                  {subCategory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <BlogCards blogData={blogData} />

      {/* Dropdown */}
      <TabsDropdown tabs={tabs} />
    </div>
  );
};

export default Page;
