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
};

export default SummaryApi;
