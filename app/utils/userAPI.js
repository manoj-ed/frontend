import SummaryApi from "../common/SummaryApi";
import AxiosPublic from "./AxiosPublic";

// Fetch All Categories
export async function getCategoryData() {
  try {
    const response = await AxiosPublic({
      ...SummaryApi.getCategory,
    });

    return response.data;
  } catch (error) {
    console.error("Category fetch failed:", error.message);
    return null;
  }
}

// Fetch Subcategories based on Category ID
export async function getSubCategoryData(categoryData, opt) {
  console.log("opt", opt);

  try {
    const dataObj =
      typeof categoryData === "string"
        ? JSON.parse(categoryData)
        : categoryData;

    const {
      category_id = 1,
      sub_category_id = 1,
      sub_category_name = "Excavators",
    } = dataObj || {};

    const response = await AxiosPublic({
      ...SummaryApi.getSubCategoryData,
      data: {
        category_id,
        sub_category_id,
        sub_category_name,
        page: opt?.page ?? 1,
        ...(opt?.operating_weight
          ? { operating_weight: opt.operating_weight }
          : {}),
        ...(opt?.brand_name ? { brand_name: opt.brand_name } : {}),
        ...(opt?.sort_price ? { sort_price: opt.sort_price } : {}),
        ...(opt?.price_range ? { price_range: opt.price_range } : {}),
      },
    });

    console.log("fillter rsponse", response);

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  } catch (error) {
    console.error("Sub-category fetch failed:", error.message);
    return null;
  }
}

// Get Details of a specific Product
export async function getProductDetails(productData) {
  const { equipment_id, category_id, sub_category_id } = productData || {};
  console.log("equipment_id", equipment_id);
  console.log("category_id", category_id);
  console.log("sub_category_id", sub_category_id);

  try {
    // if (!equipment_id || !category_id || !sub_category_id) {
    //   throw new Error("Missing required product information");
    // }

    const response = await AxiosPublic({
      ...SummaryApi.getEquipmentDetail,
      data: {
        equipment_id,
        // category_id: 1,
        category_id,
        sub_category_id,
      },
    });

    console.log("Product Details Response", response);

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  } catch (error) {
    console.error("Product details fetch failed:", error.message);
    return null;
  }
}

// Fetch Subcategories by Category ID
export async function getProductByCategory(categoryId) {
  try {
    const response = await AxiosPublic({
      ...SummaryApi.getAllSubCategories,
      data: {
        category_id: categoryId,
      },
    });

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }
    return response.data;
  } catch (error) {
    console.error("Product by category fetch failed:", error.message);
    return null;
  }
}

// get Related product based on category id for equipments info page
export async function getRelatedEquipments(data) {
  console.log("data", data);

  try {
    const response = await AxiosPublic({
      ...SummaryApi.getRelatedEquipments,
      data: {
        category_id: data.category_id,
        // sub_category_id: data.sub_category_id,
      },
    });

    console.log("Related Equipments Response", response);

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }
    return response.data;
  } catch (error) {
    console.error("Product by category fetch failed:", error.message);
    return null;
  }
}

// Get Ratings on Specific Product
export async function getProductsRatings(id) {
  try {
    const response = await AxiosPublic({
      ...SummaryApi.getProductRatings,
      data: {
        product_id: id,
      },
    });

    console.log("Ratings Data", response.data);

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  } catch (error) {
    console.log("Ratings Fetch Failed", error.message);
    return null;
  }
}

//Get All Brands
export async function getAllBrands() {
  try {
    const response = await AxiosPublic({
      ...SummaryApi.getAllBrands,
    });

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }

    console.log("brands Data", response.data);

    return response.data;
  } catch (error) {
    console.log("Brands Fetch Failed", error.message);
    return null;
  }
}

// Get Brand Details by ID
export async function getBrandDetails(id, page, filterData) {

  try {
    const response = await AxiosPublic({
      ...SummaryApi.getBrandDetail,
      data: {
        brand_id: id,
        page: page,
        // price_range: filterData?.price_range,
        ...(filterData?.price_range
          ? { price_range: filterData.price_range }
          : {}),
        ...(filterData?.category_ids
          ? { sub_category_id: filterData.category_ids }
          : {}),
      },
    });

    console.log("Fetched Brand Details:", response.data);

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  } catch (error) {
    console.error("Brand details fetch failed:", error.message);
    return null;
  }
}

// Fetch FAQs using category Id or sub category id
export async function getFaqs(data) {
  console.log("faqs", data);
  try {
    const response = await AxiosPublic({
      ...SummaryApi.getFaqs,
      data: data,
    });

    console.log("Fetched Brand Details:", response.data);

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }
    return response.data;

  } catch (error) {
    console.log("Error in fetching FAQs");
    return null;
  }
}
