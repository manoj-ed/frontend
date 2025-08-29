"use client";

import Image from "next/image";
import {
  CheckCircle,
  XCircle,
  Scale,
  Gauge,
  Settings,
  Hammer,
  ThumbsUp,
  ThumbsDown,
  Tractor,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ComparisonPage() {
  const [expanded, setExpanded] = useState(false);
  const [expandedCons, setExpandedCons] = useState(false);
  const [expandedDesc, setExpandedDesc] = useState(false);

  const allProducts = [
    {
      id: 1,
      brand: "CAT (Caterpillar)",
      model: "226B3",
      price: "28 - 32 Lakhs",
      weight: "2,641 Kg",
      engine: "61 HP",
      drive: "2WD",
      transmission: "Hydrostatic",
      attachments: "Bucket, Auger, Pallet Fork",
      pros: "The JCB is known for its reliability and durability, making it suitable for heavy-duty tasks. It has a strong lifting capacity, allowing for efficient operation. Spare parts are widely available, making maintenance easier. It is a well-established brand with a long history of trust in the market. The JCB NXT 215LC offers enhanced fuel efficiency, reducing operational costs. It features a modern design with improved ergonomics for better operator comfort. The machine is equipped with advanced features and technologies, improving its performance. It has an improved hydraulic system, enhancing its productivity. The JCB NXT 215LC is more environmentally friendly compared to older models.",
      cons: "The JCB is known for its reliability and durability, making it suitable for heavy-duty tasks. It has a strong lifting capacity, allowing for efficient operation. Spare parts are widely available, making maintenance easier. It is a well-established brand with a long history of trust in the market. The JCB NXT 215LC offers enhanced fuel efficiency, reducing operational costs. It features a modern design with improved ergonomics for better operator comfort. The machine is equipped with advanced features and technologies, improving its performance. It has an improved hydraulic system, enhancing its productivity. The JCB NXT 215LC is more environmentally friendly compared to older models.",
      description:
        "The JCB is known for its reliability and durability, making it suitable for heavy-duty tasks. It has a strong lifting capacity, allowing for efficient operation. Spare parts are widely available, making maintenance easier. It is a well-established brand with a long history of trust in the market. The JCB NXT 215LC offers enhanced fuel efficiency, reducing operational costs. It features a modern design with improved ergonomics for better operator comfort. The machine is equipped with advanced features and technologies, improving its performance. It has an improved hydraulic system, enhancing its productivity. The JCB NXT 215LC is more environmentally friendly compared to older models.",

      image:
        "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753852386/Equipments%20Dekho/Earthmoving/Excavator/Caterpillar/EM-MG-CAT-226B3_1.webp.webp",
    },
    {
      id: 2,
      brand: "JCB",
      model: "3DX Super",
      price: "25 - 30 Lakhs",
      weight: "2,800 Kg",
      engine: "76 HP",
      drive: "4WD",
      transmission: "Manual",
      attachments: "Bucket, Breaker, Fork",
      pros: "The JCB is known for its reliability and durability, making it suitable for heavy-duty tasks. It has a strong lifting capacity, allowing for efficient operation. Spare parts are widely available, making maintenance easier. It is a well-established brand with a long history of trust in the market. The JCB NXT 215LC offers enhanced fuel efficiency, reducing operational costs. It features a modern design with improved ergonomics for better operator comfort. The machine is equipped with advanced features and technologies, improving its performance. It has an improved hydraulic system, enhancing its productivity. The JCB NXT 215LC is more environmentally friendly compared to older models.",
      cons: "The JCB is known for its reliability and durability, making it suitable for heavy-duty tasks. It has a strong lifting capacity, allowing for efficient operation. Spare parts are widely available, making maintenance easier. It is a well-established brand with a long history of trust in the market. The JCB NXT 215LC offers enhanced fuel efficiency, reducing operational costs. It features a modern design with improved ergonomics for better operator comfort. The machine is equipped with advanced features and technologies, improving its performance. It has an improved hydraulic system, enhancing its productivity. The JCB NXT 215LC is more environmentally friendly compared to older models.",
      description:
        "The JCB is known for its reliability and durability, making it suitable for heavy-duty tasks. It has a strong lifting capacity, allowing for efficient operation. Spare parts are widely available, making maintenance easier. It is a well-established brand with a long history of trust in the market. The JCB NXT 215LC offers enhanced fuel efficiency, reducing operational costs. It features a modern design with improved ergonomics for better operator comfort. The machine is equipped with advanced features and technologies, improving its performance. It has an improved hydraulic system, enhancing its productivity. The JCB NXT 215LC is more environmentally friendly compared to older models.",

      image:
        "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753852386/Equipments%20Dekho/Earthmoving/Excavator/Caterpillar/EM-MG-CAT-226B3_1.webp.webp",
    },
    {
      id: 3,
      brand: "Komatsu",
      model: "PC71",
      price: "30 - 35 Lakhs",
      weight: "2,950 Kg",
      engine: "68 HP",
      drive: "2WD",
      transmission: "Hydraulic",
      attachments: "Bucket, Grapple",
      pros: "The JCB is known for its reliability and durability, making it suitable for heavy-duty tasks. It has a strong lifting capacity, allowing for efficient operation. Spare parts are widely available, making maintenance easier. It is a well-established brand with a long history of trust in the market. The JCB NXT 215LC offers enhanced fuel efficiency, reducing operational costs. It features a modern design with improved ergonomics for better operator comfort. The machine is equipped with advanced features and technologies, improving its performance. It has an improved hydraulic system, enhancing its productivity. The JCB NXT 215LC is more environmentally friendly compared to older models.",
      cons: "The JCB is known for its reliability and durability, making it suitable for heavy-duty tasks. It has a strong lifting capacity, allowing for efficient operation. Spare parts are widely available, making maintenance easier. It is a well-established brand with a long history of trust in the market. The JCB NXT 215LC offers enhanced fuel efficiency, reducing operational costs. It features a modern design with improved ergonomics for better operator comfort. The machine is equipped with advanced features and technologies, improving its performance. It has an improved hydraulic system, enhancing its productivity. The JCB NXT 215LC is more environmentally friendly compared to older models.",
      description:
        "The JCB is known for its reliability and durability, making it suitable for heavy-duty tasks. It has a strong lifting capacity, allowing for efficient operation. Spare parts are widely available, making maintenance easier. It is a well-established brand with a long history of trust in the market. The JCB NXT 215LC offers enhanced fuel efficiency, reducing operational costs. It features a modern design with improved ergonomics for better operator comfort. The machine is equipped with advanced features and technologies, improving its performance. It has an improved hydraulic system, enhancing its productivity. The JCB NXT 215LC is more environmentally friendly compared to older models.",

      image:
        "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1753852386/Equipments%20Dekho/Earthmoving/Excavator/Caterpillar/EM-MG-CAT-226B3_1.webp.webp",
    },
  ];

  const features = [
    {
      key: "weight",
      label: "Operating Weight",
      icon: <Scale className="w-4 h-4 text-blue-600" />,
    },
    {
      key: "engine",
      label: "Engine Power",
      icon: <Gauge className="w-4 h-4 text-red-600" />,
    },
    {
      key: "drive",
      label: "Drive Type",
      icon: <Tractor className="w-4 h-4 text-yellow-600" />,
    },
    {
      key: "transmission",
      label: "Transmission",
      icon: <Settings className="w-4 h-4 text-purple-600" />,
    },
    {
      key: "attachments",
      label: "Attachments",
      icon: <Hammer className="w-4 h-4 text-orange-600" />,
    },
    {
      key: "pros",
      label: "Pros",
      icon: <ThumbsUp className="w-4 h-4 text-green-600" />,
    },
    {
      key: "cons",
      label: "Cons",
      icon: <ThumbsDown className="w-4 h-4 text-red-600" />,
    },
    {
      key: "description",
      label: "Description",
      icon: <Settings className="w-4 h-4 text-gray-600" />,
    },
  ];

  const [products, setProducts] = useState(allProducts);

  // Detect screen size for product limit
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProducts(allProducts.slice(0, 2)); // show only 2 products on mobile
      } else {
        setProducts(allProducts); // show all on desktop
      }
    };
    handleResize(); // run on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("features", features);

  return (
    <div className=" max-w-7xl mx-auto py-10 ">
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-all"
          >
            <Image
              src={p.image}
              alt={p.model}
              width={180}
              height={140}
              className="object-contain mb-3 rounded-lg"
              unoptimized
            />
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              {p.brand}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{p.model}</p>
            <div className="mt-2 text-xs sm:text-sm bg-gradient-to-r from-green-100 to-green-200 border border-green-400 px-3 py-1 rounded-full shadow-sm font-bold text-gray-800">
              {p.price}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto border rounded-xl shadow-lg">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 z-30">
            <tr>
              <th className="sticky left-0 bg-white p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-gray-800 border-r z-40 w-40 sm:w-48">
                <p className="px-5">Model Name</p>
              </th>
              {products.map((p) => (
                <th
                  key={p.id}
                  className="p-4 sm:p-5 text-center border-l bg-gray-100 text-gray-900 font-semibold text-sm sm:text-base"
                >
                  {p.model}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, idx) => (
              <tr
                key={f.key}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-orange-50/60 transition-colors duration-300`}
              >
                <td className="sticky left-0 bg-white p-4 sm:p-5 font-medium text-gray-800 border-t border-r z-20 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                  {f.icon} {f.label}
                </td>
                {products.map(
                  (p) => (
                    console.log("products", products),
                    console.log("f.key", f.key),
                    (
                      <td
                        key={p.id}
                        className="p-4 sm:p-2 text-xs sm:text-sm md:text-base text-gray-900 text-center border-t border-l align-top"
                      >
                        {f.key === "pros" ? (
                          <div className="flex flex-col gap-4 items-start w-full">
                            <div className="flex items-start gap-2 bg-green-50 px-3 py-2 rounded-md hover:bg-green-100 transition-all w-full">
                              {/* Icon */}
                              <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />

                              {/* Text + Toggle */}
                              <div className="flex flex-col items-start text-start w-full">
                                <p
                                  className={`${
                                    expanded
                                      ? ""
                                      : "line-clamp-2 cursor-pointer"
                                  } text-gray-700 text-sm`}
                                  title="Click to expand"
                                  onClick={() => setExpanded(!expanded)}
                                >
                                  {p?.pros}
                                </p>

                                {/* View More / View Less */}
                                <button
                                  onClick={() => setExpanded(!expanded)}
                                  className="text-blue-500 text-xs cursor-pointer mt-1 select-none font-medium hover:underline w-fit"
                                >
                                  {expanded ? "View Less" : "View More"}
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : f.key === "cons" ? (
                          <div className="flex flex-col gap-4 items-start w-full">
                            <div className="flex items-start gap-2 bg-red-50 px-3 py-2 rounded-md hover:bg-red-100 transition-all w-full">
                              {/* Icon */}
                              <XCircle className="text-red-600 w-5 h-5 flex-shrink-0 mt-1" />

                              {/* Text + Toggle */}
                              <div className="flex flex-col w-full">
                                <p
                                  className={`${
                                    expandedCons
                                      ? ""
                                      : "line-clamp-2 text-start cursor-pointer"
                                  } text-gray-700 text-sm`}
                                  title="Click to expand"
                                  onClick={() => setExpandedCons(!expandedCons)}
                                >
                                  {p?.cons}
                                </p>

                                {/* View More / View Less */}
                                <button
                                  onClick={() => setExpandedCons(!expandedCons)}
                                  className="text-red-600 text-xs cursor-pointer mt-1 select-none font-medium hover:underline w-fit"
                                >
                                  {expandedCons ? "View Less" : "View More"}
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // <span className="font-semibold">{p[f.key]} </span>
                          <span className="font-semibold">
                            {f.key === "description" ? (
                              <div className="flex flex-col gap-4 items-start w-full">
                                <div className="flex items-start gap-2 bg-gray-50 px-3 py-2 rounded-md hover:bg-gray-100 transition-all w-full">
                                  {/* Icon */}
                                  <Settings className="text-gray-600 w-5 h-5 flex-shrink-0 mt-1" />

                                  {/* Text + Toggle */}
                                  <div className="flex flex-col w-full text-start">
                                    <p
                                      className={`${
                                        expandedDesc
                                          ? ""
                                          : "line-clamp-2 cursor-pointer"
                                      } text-gray-700 text-sm`}
                                      title="Click to expand"
                                      onClick={() =>
                                        setExpandedDesc(!expandedDesc)
                                      }
                                    >
                                      {p?.description}
                                    </p>

                                    {/* Show More / Show Less */}
                                    {p?.description?.length > 60 && (
                                      <button
                                        onClick={() =>
                                          setExpandedDesc(!expandedDesc)
                                        }
                                        className="text-gray-700 text-xs cursor-pointer mt-1 select-none font-medium hover:underline w-fit"
                                      >
                                        {expandedDesc
                                          ? "View Less"
                                          : "View More"}
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <>{p[f.key]}</>
                            )}
                          </span>
                        )}
                      </td>
                    )
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
