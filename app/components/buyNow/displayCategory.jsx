"use client";

import React, { useEffect, useState } from "react";
import { getFaqs } from "../../utils/userAPI";
import CategoryProduct from "./filterCategory/subCategoryProduct";
import TabsDropdown from "../common/TabsDropdown";
import BlogCards from "../common/blogCard";
import Loading from "../../loading";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "../common/Breadcrumb";

const DisplayCategory = () => {
  const searchParams = useSearchParams();
  const paramsData = JSON.parse(searchParams.get("data"));
  const [categoryName, setCategoryName] = useState("");

  console.log("category Name", categoryName);
  console.log("paramsData", paramsData)

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
    const storedCategory = localStorage.getItem("categoryName");
    if (storedCategory) {
      setCategoryName(storedCategory);
    }
  }, []);

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-7 gap-5 w-full px-5">
      <Breadcrumbs
        categoryName={categoryName}
        subCategoryName={descriptionData?.name}
        description={descriptionData?.description}
      />

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
