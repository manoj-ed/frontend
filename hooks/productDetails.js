import { useEffect, useState } from "react";
import {
  getProductDetails,
  getRelatedEquipments,
  getProductsRatings,
} from "@/app/utils/userAPI";
import { extractParamsFromSearchParams } from "../app/utils/searchParams";
import {
  setProductDetails,
  setRelatedProductDetails,
} from "@/app/store/productSlice/product";
import { useDispatch } from "react-redux";

export function useProductDetails(searchParams = null) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedRatings, setRelatedRatings] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      console.log("search params", extractParamsFromSearchParams(searchParams));

      try {
        const finalData = extractParamsFromSearchParams(searchParams);
        console.log("fintal data", finalData);

        if (!finalData) return;

        const [productRes, relatedRes, relatedRatings] = await Promise.all([
          getProductDetails(finalData),
          getRelatedEquipments(finalData),
          getProductsRatings(finalData.equipment_id),
        ]);

        dispatch(setProductDetails(productRes?.data));
        dispatch(setRelatedProductDetails(relatedRes?.data));

        setProductData(productRes?.data || null);
        setRelatedProducts(relatedRes?.data || []);
        setRelatedRatings(relatedRatings?.data || []);
      } catch (err) {
        console.error("Failed to fetch product info:", err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [searchParams]);

  return { productData, relatedProducts, relatedRatings, loading };
}
