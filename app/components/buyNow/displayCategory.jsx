"use client";

import React, { useEffect, useState } from "react";
import { getCategoryData, getFaqs } from "../../utils/userAPI";
import Image from "next/image";
import CategoryProduct from "./filterCategory/subCategoryProduct";
import { useRouter } from "next/navigation";
// import { setCategoryId } from "@/app/store/productSlice/product";
import test from "../../../public/test.png";
import Description from "../common/description";
import TabsDropdown from "../common/TabsDropdown";
import BlogCards from "../common/blogCard";
import Loading from "../../loading";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "../common/Breadcrumb";

const DisplayCategory = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsData = JSON.parse(searchParams.get("data"));
  // console.log("searchParams", paramsData?.sub_category_id);
  //GET categoryName from local storage
  const categoryName = localStorage.getItem("categoryName");
  console.log("category Name", categoryName);

  const tabs = [
    {
      name: "insurance",
      items: [
        {
          title: "1. Does Equipments Dekho provide equipment insurance?",
          content:
            "Yes, Equipments Dekho partners with trusted insurance providers to offer comprehensive coverage for both new and used construction equipment.",
        },
        {
          title: "2. How can I get an insurance quote on Equipments Dekho?",
          content:
            " Simply click the “Get Insurance Quote” button on the product page, submit your equipment details, and our team will connect you with our insurance partners.",
        },
        {
          title:
            "3. What are the benefits of insuring equipment through Equipments Dekho?",
          content:
            "With Equipments Dekho, you get customized policies, quick claim processing, and nationwide support, helping protect your machinery and business operations. Protecting your equipment not only reduces financial risk but also ensures continuous project operations without costly downtime. ",
        },
        {
          title:
            "4. Who is eligible for equipment insurance via Equipments Dekho?",
          content:
            "Insurance is available for contractors, builders, rental companies, and SMEs across India, subject to standard documentation and approval from the insurer.",
        },
      ],
    },
    {
      name: "financing",
      items: [
        {
          title: "1. Does Equipments Dekho offer equipment financing?",
          content:
            "Yes, Equipments Dekho works with trusted financial partners  to provide easy financing options for both new and used equipment.",
        },
        {
          title: "2. How can I apply for financing on Equipments Dekho?",
          content:
            " Simply click on the “Apply for Financing” button on the product page, fill out the form, and our finance team will guide you through the process.",
        },
        {
          title:
            "3. What are the benefits of financing through Equipments Dekho?",
          content:
            "With our finance partners, you get flexible EMI plans, quick approvals, and nationwide support, making it easier to own or upgrade your equipment.",
        },
        {
          title: "4. Who is eligible for financing?",
          content:
            " Financing is available for contractors, builders, rental companies, and SMEs across India, subject to standard documentation and lender approval.",
        },
      ],
    },
  ];

  const [descriptionData, setDescriptionData] = useState();
  const [faqs, setFaqs] = useState(null);
  const categoryData = (data) => {
    console.log("category data", data);
    setDescriptionData(data);
  };

  const fetchFaqs = async () => {
    try {
      const res = await getFaqs({
        sub_category_id: paramsData?.sub_category_id,
      });
      setFaqs({
        name: "faqs",
        items:
          res?.data?.[0]?.faqs?.map((faq, idx) => ({
            title: `${idx + 1}. ${faq.question}`,
            content: faq.answer,
          })) || [],
      });
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setFaqs({ name: "faqs", items: [] }); // fallback empty
    }
  };

  const combinedTabs = faqs ? [faqs, ...tabs] : tabs;

  useEffect(() => {
    fetchFaqs();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategoryData();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  console.log("faqs", faqs);

  if (!categories || categories.length === 0) {
    return (
      <div className="flex items-center justify-center py-5">
        <Loading />
      </div>
    );
  }

  console.log("categories", categories);

  const categorieHandleClick = (id, category_name) => {
    localStorage.setItem("category_id", id.toString());
    localStorage.setItem("categoryName", category_name);
    router.push(`/buynew/subcategorydisplay/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center py-7 gap-5 w-full px-5">
      {/* Display Categories Box*/}
      {/* <div className="flex items-center justify-center gap-4 w-full px-5 md:px-20 lg:px-40"> */}
      {searchParams.size === 1 ? (
        <Breadcrumbs
          categoryName={categoryName}
          subCategoryName={descriptionData?.name}
          description={descriptionData?.description}
        />
      ) : (
        <div className="max-w-6xl grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-4 w-full">
          {categories?.map((categorie) => (
            <div
              onClick={() => {
                categorieHandleClick(categorie.id, categorie.category_name);
              }}
              key={categorie.id}
              className="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-orange bg-gradient-to-b from-orange-50 to-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl overflow-hidden"
            >
              {/* Glow overlay */}
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Image with shimmer sweep */}
              <div className="relative">
                <Image
                  // className="rounded-[10, 10, 0, 0] w-[180px] md:h-[110px] lg:h-[150px] h-[120px] sm:w-[170px] md:w-[228px] object-cover transition-transform duration-500 group-hover:scale-105"
                  className="rounded-[10, 10, 0, 0] h-auto w-[180px]  lg:h-[150px]  sm:w-[170px] md:w-[228px] object-cover transition-transform duration-500 group-hover:scale-105"
                  src={categorie?.category_image}
                  alt="Category Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                />

                {/* Shimmer light */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              </div>

              {/* Title */}
              <div className="flex items-center justify-center py-[2px] w-full relative">
                <div className="flex flex-col items-center gap-0 px-3">
                  <p className="normal-case  font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
                    {categorie.category_name}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-center text-sm leading-4 line-clamp-2">
                    {categorie.description}
                  </p>
                </div>

                {/* Underline expanding from center */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-4/5"></span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Category Description */}
      {/* <div className="w-full">
        <Description
          name={descriptionData?.name}
          description={descriptionData?.description}
        />
      </div> */}

      {/* Display Products and filters */}
      <div className="w-full max-w-7xl mx-auto ">
        <CategoryProduct categoryData={categoryData} />
      </div>

      <div>
        {/* Blog Section */}
        <BlogCards />
      </div>

      {/* FAQs */}
      <div className="w-full">
        <TabsDropdown tabs={combinedTabs} />
      </div>
    </div>
  );
};

export default DisplayCategory;
