"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useProductDetails } from "../../../hooks/productDetails";
import { FaRegHeart } from "react-icons/fa";
import Reviews from "@/app/components/common/reviews/reviews";
import Button from "../../components/common/button";
import Slider from "../../components/common/slider/slider";
import ProductCard from "@/app/components/common/productCard";
import YouTube from "react-youtube";
import SignUp from "@/app/components/common/auth/signUp";

const ProductInfo = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [finalProductData, setFinalProductData] = useState(null);
  const [finalRelatedProducts, setFinalRelatedProducts] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");
  const [clickedProduct, setClickedProduct] = useState(null);
  const [liked, setLiked] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Custom hook call
  const { productData, relatedProducts, loading } =
    useProductDetails(searchParams);

  // Effect to update local state when hook data updates
  useEffect(() => {
    if (productData) setFinalProductData(productData);
    if (relatedProducts) setFinalRelatedProducts(relatedProducts);
  }, [productData, relatedProducts]);

  // Handles tab switch
  const handleTabClick = (tab) => setActiveTab(tab);

  // Triggered when user clicks a product
  const handleProductClick = async (product) => {
    if (
      product?.equipment_id &&
      product?.category_id &&
      product?.sub_category_id
    ) {
      setClickedProduct(product);

      const encoded = encodeURIComponent(JSON.stringify(product));
      router.push(`/buynew/product?data=${encoded}`);
    } else {
      console.warn("Invalid product clicked:", product);
    }
  };

  // Render loading UI
  if (loading)
    return <p className="text-center mt-10">Loading product details...</p>;

  // Render if no product found
  if (!finalProductData)
    return (
      <p className="text-center mt-10 text-red-500">No product data found.</p>
    );

  const data = finalProductData;

  const handleClick = () => {
    setLiked(!liked);
    setPulse(true);
    setTimeout(() => setPulse(false), 600); // match animation duration
  };

  console.log("page info data", data);

  const handleButton = () => {
    console.log("Quote button clicked");
    // setClickedProduct(product);
    setModalVisible(true);
  };

  const modal = () => {
    console.log("Got data from child:");
    setModalVisible(false);
  };

  return (
    <div className="flex flex-col w-full h-full px-5 md:px-0">
      <div className="text-sm text-orange font-normal pt-6 pb-1">
        Home /{" "}
        <span
          className="text-orange cursor-pointer"
          onClick={() => router.push(`/buynew/${data?.category_id}`)}
        >
          {data?.category_name}
        </span>
        {" / "}
        <span
          className="text-orange cursor-pointer"
          onClick={() =>
            router.push(
              `/buynew/${data?.category_name}/${data?.sub_category_name}`
            )
          }
        >
          {data?.sub_category_name}
        </span>
      </div>

      {/* Image box and content */}
      <div className="flex flex-col md:flex-row w-full h-auto items-start justify-between gap-6 ">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Slider image={data?.product_image} />
        </div>
        {/* line */}
        <div className="broder-[0.5] bg-orange w-[0.5px] h-[320px] hidden md:block"></div>
        {/* content */}
        <div className="w-full md:w-1/2">
          {/* Product Details  */}
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-col mx-auto gap-3">
              {/* Heading */}
              <div className="flex justify-between items-start">
                {/* Brand name and Model Name */}
                <div className="flex gap-2">
                  <span className="text-2xl tracking-tight font-semibold">
                    {data?.brand_name}
                  </span>
                  <span className="text-2xl tracking-tight font-semibold">
                    {data?.model_name}
                  </span>
                </div>
                {/* <button className="bg-black rounded-full p-2 text-white hover:bg-gray-800 transition-colors">
                  <FaRegHeart />
                </button> */}
                <button
                  onClick={handleClick}
                  className={`relative rounded-full p-2 transition-all duration-300  ${
                    liked
                      ? "bg-orange text-white shadow-[0_0_0_4px_rgba(255,165,0,0.5)]"
                      : "bg-gray-200 text-orange hover:bg-orange hover:text-white animate-pulse"
                  } hover:shadow-[0_0_0_4px_rgba(255,165,0,0.5)]${
                    pulse ? "pulse-once " : ""
                  }`}
                >
                  <FaRegHeart />
                </button>
              </div>

              {/* Price Range */}
              <span className=" bg-[#F5F5F5] w-fit text-orange text-md font-bold px-4 py-1 rounded-md ">
                ₹ {data?.price_range}
              </span>

              {/* Key Specification */}
              <div className="text-lg font-semibold">
                <div className="mb-1 text-gray-800">Key Specification</div>

                <div className="flex flex-wrap bg-white rounded-xl shadow-sm border border-gray-200 p-1">
                  {/* {data?.brand_name && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700 leading-snug group-hover:text-orange-500">
                        Brand:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600 leading-snug group-hover:text-orange-500">
                        {data.brand_name}
                      </span>
                    </div>
                  )}

                  {data?.model_name && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700 leading-snug group-hover:text-orange-500">
                        Model:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600 leading-snug group-hover:text-orange-500">
                        {data.model_name}
                      </span>
                    </div>
                  )} */}

                  {data?.operating_weight && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Operating Wt:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.operating_weight}
                      </span>
                    </div>
                  )}

                  {data?.engine_power && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Engine Power:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.engine_power}
                      </span>
                    </div>
                  )}

                  {data?.drive_type && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Drive Type:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.drive_type}
                      </span>
                    </div>
                  )}

                  {data?.bucket_capacity && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Bucket Capacity (Front):
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.bucket_capacity}
                      </span>
                    </div>
                  )}

                  {data?.dipper_bucket_capacity && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Dipper/Bucket Capacity (Back):
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.dipper_bucket_capacity}
                      </span>
                    </div>
                  )}

                  {data?.blade_type && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Blade Type:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.blade_type}
                      </span>
                    </div>
                  )}

                  {data?.transmission_type && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Transmission Type:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.transmission_type}
                      </span>
                    </div>
                  )}

                  {data?.rated_operating_capacity && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Rated Operating Capacity:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.rated_operating_capacity}
                      </span>
                    </div>
                  )}

                  {data?.track_type && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Track Type:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.track_type}
                      </span>
                    </div>
                  )}

                  {data?.blade_width && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Blade Width:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.blade_width}
                      </span>
                    </div>
                  )}

                  {data?.trencher_type && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Trencher Type:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.trencher_type}
                      </span>
                    </div>
                  )}

                  {data?.trenching_depth && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Trenching Depth:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.trenching_depth}
                      </span>
                    </div>
                  )}

                  {data?.trenching_width && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Trenching Width:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.trenching_width}
                      </span>
                    </div>
                  )}

                  {data?.scraper_type && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Scraper Type:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.scraper_type}
                      </span>
                    </div>
                  )}

                  {data?.capacity && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700  group-hover:text-orange-500">
                        Capacity:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600  group-hover:text-orange-500">
                        {data.capacity}
                      </span>
                    </div>
                  )}

                  {(data?.attachments || data?.attachment_included) && (
                    <div className="w-1/2 pl-2 group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm">
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
                      <span className="text-xs font-semibold text-gray-700 group-hover:text-orange-500">
                        Attachments:
                      </span>
                      <span className="pl-1 text-xs font-normal text-gray-600 group-hover:text-orange-500">
                        {data.attachments || data.attachment_included}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="">
                <div className="text-lg font-semibold">Description</div>
                <div>
                  <p
                    onClick={() => setExpanded(!expanded)}
                    className={`text-xs text-gray-600 tracking-tight font-normal cursor-pointer transition-all duration-300 ${
                      expanded ? "" : "line-clamp-1"
                    }`}
                    title="Click to expand"
                  >
                    {data?.description}
                  </p>

                  <div
                    onClick={() => setExpanded(!expanded)}
                    className="text-orange-500 text-xs cursor-pointer mt-1 select-none font-medium"
                  >
                    {expanded ? "View Less" : "View More"}
                  </div>
                </div>
              </div>

              {/* Button */}
              <div onClick={handleButton}>
                <Button
                  style={`text-[18px] font-semibold px-5 py-2 rounded-sm hover:bg-orange-400`}
                  text={`Get a Quote`}
                />
              </div>
              {modalVisible && <SignUp setModalVisible={modal} />}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="w-full my-5">
        <div className="w-full">
          {/* Tab Buttons */}
          <div className="flex space-x-4 border-b border-gray-300 mb-4">
            <button
              onClick={() => handleTabClick("tab1")}
              className={`px-4 py-0 font-medium ${
                activeTab === "tab1"
                  ? "border-b-2 border-orange text-orange  font-semibold"
                  : "text-gray-500"
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => handleTabClick("tab2")}
              className={`px-4 py-2 font-medium ${
                activeTab === "tab2"
                  ? "border-b-2 border-orange text-orange  font-semibold"
                  : "text-gray-500  hover:text-orange  font-semibold"
              }`}
            >
              Pros & Cons
            </button>
            {/* <button
              onClick={() => handleTabClick("tab3")}
              className={`px-4 py-2 font-medium ${
                activeTab === "tab3"
                  ? "border-b-2 border-orange text-orange  font-semibold"
                  : "text-gray-500"
              }`}
            >
              Reviews
            </button> */}
          </div>

          {/* Tab Content */}
          <div className="w-full">
            {activeTab === "tab1" && (
              <div>
                <VideoDisplay
                  videoLinks={[data?.video1, data?.video2, data?.video3]}
                />
              </div>
            )}
            {activeTab === "tab2" && (
              <div>
                <ProCons pros={data.pros} cons={data.cons} />
              </div>
            )}
            {/* {activeTab === "tab3" && <p>This is content for Tab 3.</p>} */}
          </div>
        </div>
      </div>

      {/* Rating and Review */}
      <div className="my-5">
        <Reviews />
      </div>

      {/* Related Product */}
      <div className="my-5">
        <div className="flex space-x-4 border-b border-gray-300 mb-4">
          <div
            className={`px-4 py-2 text-md border-b-2 border-orange text-orange  font-semibold`}
          >
            Related Products
          </div>
        </div>
        <ProductCard
          style={"grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
          productData={relatedProducts}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
};

export default ProductInfo;

// Video Player
const VideoDisplay = ({ videoLinks }) => {
  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  const onReady = (event) => {
    // console.log("YouTube player is ready");
  };

  const onError = (error) => {
    console.error("YouTube player error:", error);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
      {videoLinks.map((link, index) => {
        const videoId = getYouTubeVideoId(link);
        if (!videoId) return null;

        return (
          <div
            key={index}
            className="w-full rounded-sm border-[0.5px] border-orange-500 bg-[#f5f5f5] p-5"
          >
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onReady}
              onError={onError}
              className="w-full"
            />
          </div>
        );
      })}
    </div>
  );
};

//Pros & Cons
const ProCons = ({ pros, cons }) => {
  return (
    <div className=" w-full">
      <div className="flex w-full flex-col md:flex-row gap-5 leading-5 tracking-normal justify-between">
        <div>
          <p className="text-[#177A08] font-semibold text-lg">Pros</p>
          <li className="pl-3">{pros}</li>
        </div>
        <div>
          <p className="text-[#F22222] font-semibold text-lg">Cons</p>
          <li className="pl-3">{cons}</li>
        </div>
      </div>
    </div>
  );
};
