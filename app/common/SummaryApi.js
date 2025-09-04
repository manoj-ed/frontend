export const baseURL = process.env.API_URL;

const SummaryApi = {
  getCategory: {
    // 1
    url: "categories",
    method: "get",
  },
  // 
  getAllSubCategories: {
    url: "get-subcategories",
    method: "post",
  },
  // 2
  getSubCategoryData: {
    url: "getEquipmentsdata",
    method: "post",
  },
  // 3
  getEquipmentDetail: {
    url: "get-equipment-detail",
    method: "post",
  },
  getRelatedEquipments: {
    url: "get-related-equipments",
    method: "post",
  },
  getProductRatings: {
    url: "get-equipments-review",
    method: "post",
  },
  getAllBrands: {
    url: "brands",
    method: "get",
  },
};

export default SummaryApi;
