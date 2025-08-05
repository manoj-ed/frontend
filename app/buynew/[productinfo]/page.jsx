"use client";

import { getProductDetails } from "@/app/utils/buyNewAPI";
import { FaRegHeart } from "react-icons/fa";
import Reviews from "@/app/components/common/reviews/reviews";
import { useEffect, useState } from "react";
import Button from "../../components/common/button";
import Slider from "../../components/common/slider/slider";
import { useRouter } from "next/navigation";
import YouTube from "react-youtube";
import ProductCard from "@/app/components/common/productCard";

const ProductInfo = () => {

  const router = useRouter();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("tab1");
  const [liked, setLiked] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const encodedData = searchParams.get("data");
        if (!encodedData) {
          console.error("No product data in URL");
          return;
        }

        const paramsData = JSON.parse(decodeURIComponent(encodedData));

        const response = await getProductDetails(paramsData);
        if (response?.data) {
          setProductData(response.data);
        } else {
          console.error("No response data found");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!productData)
    return <p className="text-center mt-10">No product data found.</p>;

  const data = productData;

  console.log("Product Info page Data", data);

  return (
    <div className="flex flex-col w-full h-full px-5 md:px-0">
      {/* Params Slug */}
      {/* <div className="text-sm text-gray-500 font-normal pt-6 pb-1">
        Home / <span>{data?.category_name}</span>
        {" / "}
        <span>{data?.sub_category_name}</span>
      </div> */}
       <div className="text-sm text-orange font-normal pt-6 pb-1">
      Home /{" "}
      <span
        className="text-orange cursor-pointer"
        onClick={() =>
          router.push(`/buynew/${data?.category_id}`)
        }
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
                    {data.brand_name}
                  </span>
                  <span className="text-2xl tracking-tight font-semibold">
                    {data.model_name}
                  </span>
                </div>
                {/* <button className="bg-black rounded-full p-2 text-white hover:bg-gray-800 transition-colors">
                  <FaRegHeart />
                </button> */}
                <button
                  onClick={() => setLiked(!liked)}
                  className={`rounded-full p-2 transition-colors ${
                    liked
                      ? "bg-orange text-white"
                      : "bg-black text-white hover:bg-orange "
                  }`}
                >
                  <FaRegHeart />
                </button>
              </div>

              {/* Price Range */}
              <span className=" bg-[#F5F5F5] w-fit text-orange text-md font-bold px-4 py-1 rounded-md ">
                {data.price_range}
              </span>

              {/* Key Specification */}
              <div className="text-lg font-semibold">
                <div>Key Specification</div>
                <div className="grid grid-cols-2  grid-rows-2">
                  <div className="text-sm font-semibold">
                    Brand:
                    <span className="pl-1 font-normal text-gray-600">
                      {data.brand_name}
                    </span>
                  </div>
                  <div className="text-sm font-semibold">
                    Model:
                    <span className="pl-1 font-normal text-gray-600">
                      {data.model_name}
                    </span>
                  </div>
                  <div className="text-sm font-semibold">
                    {data?.operating_weight && (
                      <p>
                        Operating Wt:
                        <span className="pl-1 font-normal text-gray-600">
                          {data.operating_weight}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className="text-sm font-semibold">
                    {data.engine_power ? (
                      <div>
                        Engine Power:
                        <span className="pl-1 font-normal text-gray-600">
                          {data.engine_power}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              {/* Subtext */}
              <div className="">
                <div className="text-lg font-semibold">Description</div>
                <p className="text-xs text-gray-600 tracking-tight font-normal ">
                  {data.description}
                </p>
              </div>

              {/* Button */}
              <Button
                style={`text-[18px] font-semibold px-5 py-2 rounded-md hover:bg-orange-400`}
                text={`Get a Quote`}
              />
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
                  : "text-gray-500"
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
          <div className="">
            {activeTab === "tab1" && (
              <div>
                <VideoDisplay
                  videoLinks={[data.video1, data.video2, data.video3]}
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
          <button
            className={`px-4 py-2 text-md border-b-2 border-orange text-orange  font-semibold`}
          >
            Related Products
          </button>

          {/* < ProductCard /> */}
        </div>
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
    console.log("YouTube player is ready");
  };

  const onError = (error) => {
    console.error("YouTube player error:", error);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
      {videoLinks.map((link, index) => {
        const videoId = getYouTubeVideoId(link);
        return (
          <div key={index}>
            {videoId ? (
              <div className="rounded-md border-[0.5px] border-orange-500 bg-[#f5f5f5] p-5">
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  onReady={onReady}
                  onError={onError}
                  className="w-full"
                />
              </div>
            ) : (
              ""
            )}
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
