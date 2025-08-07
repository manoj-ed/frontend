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
export async function getSubCategoryData(categoryData) {
  console.log("data Object", categoryData);
  try {
    // Parse the incoming JSON string if it's a string
    const dataObj =
      typeof categoryData === "string"
        ? JSON.parse(categoryData)
        : categoryData;

    // Destructure with fallback values
    const {
      category_id = 1,
      sub_category_id = 1,
      sub_category_name = "Excavators",
    } = dataObj || {};
    
        console.log("category Id" , sub_category_name);


    const response = await AxiosPublic({
      ...SummaryApi.getSubCategoryData,
      data: {
        category_id,
        sub_category_id,
        sub_category_name,
      },
    });

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
        sub_category_id: data.sub_category_id,
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
