import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./button";
import Signup from "@/app/components/common/auth/signUp";
import CompareModal from "./compare/compareModal";

const ProductCard = ({ productData, onProductClick, style }) => {
  console.log("product DAta", productData);

  const category_id = localStorage.getItem("categoryId");
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
    <div className={`${style} grid gap-4`}>
      {productData.map(
        (sc, index) => (
          (
            <div
              // key={sc?.category_id || index}
              key={sc?.category_id ? `${sc.category_id}-${index}` : `index-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }} // staggered animation
              className="card-animate w-full flex flex-col gap-1 items-start justify-center p-3 md:p-4 border border-orange rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-orange-500 group"
            >
              <div className="overflow-hidden rounded-md">
                <Image
                  onClick={() =>
                    onProductClick({
                      equipment_id: sc.product_id,
                      category_id: category_id,
                      sub_category_id: sc.sub_category_id,
                    })
                  }
                  src={sc?.image1}
                  alt={sc?.model_name || "Product Image"}
                  className="w-[170px] h-[106px] lg:w-[270px] lg:h-[170px] cursor-pointer rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="flex gap-1 flex-col justify-between items-start">
                <h3 className="text-[16px] font-normal">
                  {sc?.brand_name} {sc?.model_name}
                </h3>
                <p className="text-[14px] font-semibold ">₹{sc?.price_range}</p>
                <p className="text-[12px] font-normal leading-4 tracking-normal text-gray-500 line-clamp-2">
                  {sc?.description}
                </p>
                <div className="w-full  flex gap-2 justify-between md:flex-col lg:flex-row md:gap-3">
                  <div onClick={handleButton}>
                    <Button
                      text={"Get a Quote"}
                      style={
                        "py-1 px-[5px] md:px-4 text-xs font-normal group-hover:bg-orange group-hover:text-white transition-colors duration-300"
                      }
                    />
                  </div>
                  {/* Compare Button */}
                  {/* <div onClick={() => router.push(`/buynew/compare/${sc.product_id}`)}> */}
                  <div
                    onClick={() => {
                      // router.push(`/buynew/compare`);
                      setOpenModal(true);
                    }}
                  >
                    <Button
                      text={"Compare"}
                      style={
                        "py-1 px-[5px] md:px-4 text-xs font-normal group-hover:bg-orange group-hover:text-white transition-colors duration-300"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        )
      )}

      {/* Showing Signup Modal whenever user click Get a Quote button on product Card */}
      {modalVisible && <Signup setModalVisible={modal} />}

      {/* Reusable Modal */}
      <CompareModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default ProductCard;
