import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductDetails from "../ProductDetails";

export const fetchProductDetails = createAsyncThunk(
  "ProductDetails/fetchProductDetails",
  async ({ id }) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  details: null,
  loading: true,
  error: null,
};

const ProductDetailsSlice = createSlice({
  name: "ProductDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.loading = false;
        state.error = action.payload.error.message;
      });
  },
});

export default ProductDetailsSlice.reducer;
