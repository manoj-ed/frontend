import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  categoryId: {},
  productDetails: {},
  relatedProductDetails: {},
  allSubCategoryData: [],
  filterData: [],
  brands: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialValue,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setAllSubCategoryData: (state, action) => {
      state.allSubCategoryData = [...action.payload];
    },
    setFilterData: (state, action) => {
      state.filterData = [...action.payload];
    },
    setBrands: (state, action) => {
      state.brands = [...action.payload];
    },
    setProductDetails: (state, action) => {
      state.productDetails = { ...action.payload };
    },
    setRelatedProductDetails: (state, action) => {
      state.relatedProductDetails = { ...action.payload };
    },
  },
});

export const {
  setAllSubCategoryData,
  setFilterData,
  setBrands,
  setProductDetails,
  setCategoryId,
  setRelatedProductDetails,
} = productSlice.actions;

export default productSlice.reducer;
