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
  console.log("product Data", productData);
  const { equipment_id, category_id, sub_category_id } = productData || {};

  try {
    if (!equipment_id || !category_id || !sub_category_id) {
      throw new Error("Missing required product information");
    }

    const response = await AxiosPublic({
      ...SummaryApi.getEquipmentDetail,
      data: {
        equipment_id,
        category_id: 1,
        sub_category_id,
      },
    });

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

// get Related product based on category id and subcategory for equipments info page
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
