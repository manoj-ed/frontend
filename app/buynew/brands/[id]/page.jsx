"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/app/components/common/productCard";
import Filteraside from "@/app/components/common/brands/filteraside";
import { useRouter } from "next/navigation";
import Description from "@/app/components/common/description";
import TabsDropdown from "@/app/components/common/TabsDropdown";

const Page = () => {

  // Dropown tabs data
  const tabs = [
    {
      name: "insurance",
      items: [
        { title: "Insurance Option 1", content: "Details for option 1." },
        { title: "Insurance Option 2", content: "Details for option 2." },
        { title: "Insurance Option 3", content: "Details for option 3." },
      ],
    },
    {
      name: "financing",
      items: [
        { title: "Financing Option 1", content: "Flexible EMI plan 1." },
        { title: "Financing Option 2", content: "Flexible EMI plan 2." },
        { title: "Financing Option 2", content: "Flexible EMI plan 2." },
        { title: "Financing Option 2", content: "Flexible EMI plan 2." },
      ],
    },
  ];

  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const brand = searchParams.get("brand");

  console.log("brand id", id);


  const data = [
    {
      id: 225,
      product_id: "EM-WL-VOL-L150H",
      category_id: "1",
      sub_category_id: "6",
      brand_name: "Volvo",
      model_name: "L150H",
      operating_weight: "24,100",
      price_range: "1.4 - 1.7 Crore",
      min_price: "1,40,00,000",
      max_price: "1,70,00,000",
      description:
        "The Volvo L150H delivers 295 HP and optimized hydraulics for smooth, responsive operation in heavy-duty tasks. With advanced fuel-saving features and load-sensing technology, it performs efficiently in quarrying, loading, and industrial applications.",
      pros: "Excellent power-to-weight ratio, Ergonomic cab, Great for quarry work",
      cons: "High operating cost, Larger turning radius, Needs frequent software updates",
      video1: "https://www.youtube.com/watch?v=p5sPrV6VaI8",
      video2: "https://www.youtube.com/watch?v=g0_IANRhF8k",
      video3: "https://youtu.be/Agg65AdYlzI",
      engine_power: "303",
      bucket_capacity: "6.8",
      drive_type: "4WD",
      attachments: "Buckets, Rock Buckets",
      transmission_type: "Volvo PowerShift",
    },
    {
      id: 165,
      product_id: "EM-SS-CSE-SR150",
      category_id: "1",
      sub_category_id: "4",
      brand_name: "CASE",
      model_name: "SR150",
      operating_weight: "2,485",
      price_range: "22 - 25 Lakhs",
      min_price: "22,00,000",
      max_price: "25,00,000",
      description:
        "The CASE SR150 delivers 52 HP and higher operating capacity, making it suitable for mid-size construction tasks. It features a strong lift arm, smooth hydraulics, and a durable frame for efficient performance across job sites.",
      pros: "Great value for price, Reliable engine, Versatile for light to medium work",
      cons: "No advanced features, Cabin comfort is average, May underperform in high-demand scenarios",
      video1: "https://www.youtube.com/watch?v=Qu8KhrSxy1c",
      video2: "https://youtu.be/F6EgvoNtnVs?feature=shared",
      video3: "https://www.youtube.com/watch?v=f7fU1EyEoJU",
      image1:
        "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753850280/Equipments%20Dekho/Earthmoving/Excavator/CASE/EM-SS-CSE-SR150_1.webp.webp",
      engine_power: "52",
      drive_type: "2WD",
      attachments: "Bucket, Grapple",
      rated_operating_capacity: "680",
    },
    {
      id: 145,
      product_id: "EM-BL-ESC-Digmax II",
      category_id: "1",
      sub_category_id: "2",
      brand_name: "Escorts",
      model_name: "Digmax II",
      price_range: "25 - 27 Lakhs",
      min_price: "25,00,000",
      max_price: "27,00,000",
      description:
        "The Escorts Digmax II is a rugged 76 HP backhoe loader designed for high productivity and low operating cost. With efficient hydraulics, robust build quality, and a spacious operator cabin, it is well-suited for general construction, trenching, and loading work.",
      pros: "High-torque, fuel-efficient engine for excellent power, superior hydraulic system ensures smooth and precise control, robust front loader and backhoe attachment allow multi-functional operations.",
      cons: "Engine power is 47 Hp, may be less powerful than some competitors for very heavy-duty tasks, potential for higher maintenance costs compared to some other brands.",
      video1: "https://www.youtube.com/watch?v=p3YLb0rtjAU",
      video2: "https://www.youtube.com/watch?v=jODEjUPurI8",
      video3: "https://www.youtube.com/watch?v=C1eaFrUgKa4",
      notes: "0",
      image1:
        "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753688631/Equipments%20Dekho/Earthmoving/Excavator/Escorts/EM-BL-ESC-Digmax%20II_1.webp.webp",
      engine_power: "76",
      bucket_capacity: "1",
      dipper_bucket_capacity: "0.26",
      drive_type: "2WD",
      attachments: "Breaker, Auger, Loader Bucket",
    },
    {
      id: 3,
      product_id: "EM-EX-JCB-JCB 81",
      category_id: "1",
      sub_category_id: "1",
      brand_name: "JCB",
      model_name: "JCB 81",
      operating_weight: "8",
      attachment_included: "Bucket, optional breaker",
      price_range: "38 - 45 Lakhs",
      min_price: "3800000",
      max_price: "4500000",
      description:
        "An 8-ton class excavator designed for powerful performance in compact worksites. Features advanced hydraulics, fuel-efficient ecoMAX engine, and a spacious operator cabin. Perfect for urban construction, irrigation, and road development projects.",
      pros: "Fuel-efficient, strong digging force, easy transport",
      cons: "Limited reach, basic cabin",
      video1: "https://youtu.be/59wAXmj_EXs?feature=shared",
      video2: "https://youtu.be/ryzOajOiIYI?feature=shared",
      image1:
        "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753530589/Equipments%20Dekho/Earthmoving/Excavator/JCB/EM-EX-JCB-JCB%2081_1.webp.webp",
    },
    {
      id: 3,
      product_id: "EM-EX-JCB-JCB 81",
      category_id: "1",
      sub_category_id: "1",
      brand_name: "JCB",
      model_name: "JCB 81",
      operating_weight: "8",
      attachment_included: "Bucket, optional breaker",
      price_range: "38 - 45 Lakhs",
      min_price: "3800000",
      max_price: "4500000",
      description:
        "An 8-ton class excavator designed for powerful performance in compact worksites. Features advanced hydraulics, fuel-efficient ecoMAX engine, and a spacious operator cabin. Perfect for urban construction, irrigation, and road development projects.",
      pros: "Fuel-efficient, strong digging force, easy transport",
      cons: "Limited reach, basic cabin",
      video1: "https://youtu.be/59wAXmj_EXs?feature=shared",
      video2: "https://youtu.be/ryzOajOiIYI?feature=shared",
      image1:
        "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753530589/Equipments%20Dekho/Earthmoving/Excavator/JCB/EM-EX-JCB-JCB%2081_1.webp.webp",
    },
    {
      id: 3,
      product_id: "EM-EX-JCB-JCB 81",
      category_id: "1",
      sub_category_id: "1",
      brand_name: "JCB",
      model_name: "JCB 81",
      operating_weight: "8",
      attachment_included: "Bucket, optional breaker",
      price_range: "38 - 45 Lakhs",
      min_price: "3800000",
      max_price: "4500000",
      description:
        "An 8-ton class excavator designed for powerful performance in compact worksites. Features advanced hydraulics, fuel-efficient ecoMAX engine, and a spacious operator cabin. Perfect for urban construction, irrigation, and road development projects.",
      pros: "Fuel-efficient, strong digging force, easy transport",
      cons: "Limited reach, basic cabin",
      video1: "https://youtu.be/59wAXmj_EXs?feature=shared",
      video2: "https://youtu.be/ryzOajOiIYI?feature=shared",
      image1:
        "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753530589/Equipments%20Dekho/Earthmoving/Excavator/JCB/EM-EX-JCB-JCB%2081_1.webp.webp",
    },
  ];

  const handleProductClick = (clickedProduct) => {
    try {
      const encodedData = encodeURIComponent(JSON.stringify(clickedProduct));
      router.push(`/buynew/product?data=${encodedData}`);
    } catch (err) {
      console.log("Error on product click:", err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 py-5 px-3">
      {/* Sticky Sidebar */}
      <aside className="w-full md:w-3/6 lg:w-2/6 md:sticky top-6 self-start h-fit bg-white shadow-sm rounded-lg ">
        <Filteraside />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-5/6 flex flex-col gap-8">
        {/* Brand Info */}
        <Description
          logo={"this is logo"}
          name={"Brand Name"}
          description={
            "This brand is known for durable and reliable equipment trusted by businesses worldwide. With a legacy of quality, the company delivers products that combine innovation, functionality, and long-lasting performance."
          }
        />

        {/* Product Card */}
        <ProductCard
          onProductClick={handleProductClick}
          productData={data}
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
  );
};

export default Page;
