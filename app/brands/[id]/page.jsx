"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/app/components/common/productCard";
import Filteraside from "@/app/components/common/brands/filteraside";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import Description from "@/app/components/common/description";
import TabsDropdown from "@/app/components/common/TabsDropdown";
import BlogCards from "@/app/components/common/blogCard";
import { getBrandDetails } from "@/app/utils/userAPI";

const Page = () => {
  // Dropown tabs data
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

  const router = useRouter();

  const searchParams = useSearchParams();
  const params = useParams();

  const brandName = searchParams.get("brand");
  const brandId = params.id;

  const [brandDescription, setBrandDescription] = useState(null);
  const [productData, setProductData] = useState([]);
  const [filterCategoryData, setFilterCategoryData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 10,
    totalProducts: 0,
    lastPage: 0,
  });
  const [priceRange, setPriceRange] = useState([]);

  console.log("brand id", brandId);
  console.log("brand", brandName);

  const getBrandData = async () => {
    try {
      const data = await getBrandDetails(brandId);
      console.log("Fetched Brand Data:", data);

      setBrandDescription(data.brand);
      setProductData(data.products || []);
      setFilterCategoryData(data.sub_categories || []);
      setPagination((prev) => ({
        ...prev,
        currentPage: data.current_page,
        itemsPerPage: data.per_page,
        totalProducts: data.current_page,
        lastPage: data.last_page,
      }));
      setPriceRange([
        Number(
          String(data.min_price).replace("₹", "").trim().replace(/,/g, "")
        ),
        Number(
          String(data.max_price).replace("₹", "").trim().replace(/,/g, "")
        ),
      ]);
    } catch (err) {
      console.error("Error fetching brand details:", err);
    }
  };

  const filterHandler = async (filterData) => {
    getBrandData(filterData)
  }

  useEffect(() => {
    if (brandId) getBrandData();
  }, [brandId]);

  console.log("brandDescription", brandDescription);

  const handleProductClick = (clickedProduct) => {
    try {
      const encodedData = encodeURIComponent(JSON.stringify(clickedProduct));
      router.push(`/buynew/product?data=${encodedData}`);
    } catch (err) {
      console.log("Error on product click:", err);
    }
  };

  console.log("productData", productData);
  console.log("priceRange", priceRange);

  return (
    <div className="px-10">
      <div className="flex flex-col md:flex-row gap-6 py-5 ">
        {/* Sticky Sidebar */}
        <aside className="w-full md:w-3/12  md:sticky top-6 self-start h-fit bg-white shadow-sm rounded-lg ">
          <Filteraside
            category={filterCategoryData}
            pagination={pagination}
            priceSlider={priceRange}
          />
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-12/12 flex flex-col gap-8">
          {/* Brand Info */}
          <Description
            logo={brandDescription?.brand_image}
            name={brandDescription?.brand_name}
            description={
              brandDescription?.description || "No description available"
            }
          />

          {/* Product Card */}
          <ProductCard
            onProductClick={handleProductClick}
            productData={productData}
            style={"grid-cols-2 lg:grid-cols-3"}
          />

          {/* <section className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-orange-500">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            About {brand || "Brand Name"}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {brand || "This brand"} has been revolutionizing the market with its
            innovative approach to equipment and tools. Their mission is to
            create value for businesses through products that are reliable,
            sustainable, and cost-effective. With decades of experience in
            manufacturing and service, they have built a strong reputation for
            delivering on their promises.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            The company also invests heavily in research and development,
            ensuring their products meet modern industry requirements. They
            focus on energy efficiency, durability, and ease of use, making them
            a preferred choice across industries like construction, healthcare,
            and manufacturing. Their customer service ensures smooth support
            from purchase to maintenance.
          </p>
        </section> */}

          {/* Tabs Section */}
          <div className="w-full">
            <TabsDropdown tabs={tabs} />
          </div>
        </main>
      </div>
      {/* Blog Section */}
      <div>
        <BlogCards />
      </div>
    </div>
  );
};

export default Page;
