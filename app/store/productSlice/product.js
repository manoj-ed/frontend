import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  productDetails: {},
  allSubCategoryData: [],
  filterData: [],
  brands: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialValue,
  reducers: {
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
  },
});

export const {
  setAllSubCategoryData,
  setFilterData,
  setBrands,
  setProductDetails,
} = productSlice.actions;

export default productSlice.reducer;
