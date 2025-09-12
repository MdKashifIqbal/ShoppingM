import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductDetails from "../ProductDetails";


const initialState = {
  details: null,
  loading: true,
};

const ProductDetailsSlice = createSlice({
  name: "ProductDetails",
  initialState,
  reducers: {
    fetchProductDetails: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.details = action.payload;
    },
  },
});

export const { fetchProductDetails } = ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;
