import Image from "next/image";
import React from "react";
import favorite from "../../../public/test.webp";
import { useRouter } from "next/navigation";
import Button from "./button";

const ProductCard = ({ productData, onProductClick, style }) => {

  console.log("product DAta", productData)

  const id = localStorage.getItem("categoryId")
  const router = useRouter();

  return (
    // <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div className={`${style} grid gap-4`}>
      {productData.map((sc) => (
        <div
          key={sc.id}
          onClick={() =>
            onProductClick({
              equipment_id: sc.product_id,
              category_id: id,
              sub_category_id: sc.sub_category_id,
            })
          }
          className="w-full flex flex-col gap-1 items-start justify-center p-4 border-[0.5] border-orange rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          // onClick={() => handleCardClick(sc.id)}
        >
          <div>
            <Image
              // src={sc?.category_image}
              src={sc?.image1}
              alt="favorite Icons"
              // className="w-[127px] h-[106px] lg:w-[246px] lg:h-[247px] cursor-pointer"
              className="w-[170px] h-[106px] lg:w-[270px] lg:h-[170px] cursor-pointer rounded-md object-cover"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="flex gap-1 flex-col justify-between items-start">
            <h3 className="text-[16px] font-normal">{sc?.model_name}</h3>
            <p className="text-[14px] font-semibold ">₹{sc?.price_range}</p>
            <p className="text-[12px] font-normal leading-4 tracking-normal text-gray-500 line-clamp-2">
              {sc?.description}
            </p>
            <Button text={"Get a Quote"} style={"px-2 py-1 text-sm font-normal"}/>
          </div>
        </div>
      ))}

      {/* Dummy Product Card */}
      {/* <div className="w-full flex flex-col gap-1 items-start justify-center p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div>
          <Image
            src={favorite}
            alt="favorite Icons"
            // className="w-[39px] h-auto sm:w-[20px] md:w-[39px] cursor-pointer"
            className="w-[127px] h-[106px] lg:w-[246px] lg:h-[247px] cursor-pointer"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col justify-between items-start">
          <h3 className="text-[16px] font-semibold">Product Name</h3>
          <p className="text-[14px] text-gray-500">$99.99</p>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
