import Image from "next/image";
import React from "react";
import favorite from "../../../public/test.webp";
import { useRouter } from "next/navigation";
import Button from "./button";

const ProductCard = ({ productData, onProductClick, style }) => {
  console.log("product DAta", productData);

  const id = localStorage.getItem("categoryId");
  const router = useRouter();

  return (
    <div className={`${style} grid gap-4`}>
      {productData.map((sc, index) => (
        <div
          key={sc.id}
          style={{ animationDelay: `${index * 0.1}s` }} // staggered animation
          className="card-animate w-full flex flex-col gap-1 items-start justify-center p-3 md:p-4 border border-orange rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-orange-500 group"
        >
          <div className="overflow-hidden rounded-md">
            <Image
              onClick={() =>
                onProductClick({
                  equipment_id: sc.product_id,
                  category_id: id,
                  sub_category_id: sc.sub_category_id,
                })
              }
              src={sc?.image1}
              alt="favorite Icons"
              className="w-[170px] h-[106px] lg:w-[270px] lg:h-[170px] cursor-pointer rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
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
            <div className="w-full  flex gap-2 justify-between md:gap-3">
              <Button
                text={"Get a Quote"}
                style={
                  "py-1 px-[5px] md:px-4 text-xs font-normal group-hover:bg-orange group-hover:text-white transition-colors duration-300"
                }
              />
              {/* Compare Button */}
              <Button
                text={"Compare"}
                style={
                  "py-1 px-[5px] md:px-4 text-xs font-normal group-hover:bg-orange group-hover:text-white transition-colors duration-300"
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
