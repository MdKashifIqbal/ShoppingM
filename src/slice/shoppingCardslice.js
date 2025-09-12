import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act, useEffect } from "react";
import ProductDetails from "../ProductDetails";

const initialState = {
  allProducts: [],
  list: [{ title: "Hey!!!!!!" }],
  totalNumberOfButtons: null,
  limit: 10,
  loading: true,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "shoppingCard/fetchProducts",
  async ({page_no, limit}) => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page_no-1)*limit}`);
      const data = await res.json();
      return { products: data.products, total: data.total };
    } catch (error) {
      console.log(error.message);
    }
  }
);



const shoppingCardSlice = createSlice({
  name: "shoppingCard",
  initialState,
  reducers: {
    sortByprice: (state, action) => {
      if (action.payload == "low-to-high") {
        state.list = state.list.sort((a, b) => a.price - b.price);
      } else if (action.payload == "high-to-low") {
        state.list = state.list.sort((a, b) => b.price - a.price);
      }
    },
    searchByProductName: (state, action) => {
      state.list = state.allProducts.filter((product) =>
        product.title.toLocaleLowerCase().includes(action.payload)
      );
    },
    filterByCategory: (state, action) => {
      if(action.payload){
        state.list = state.allProducts.filter(
          (product) => product.category == action.payload
        );
      }else{
        state.list = [...state.allProducts]
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload.products;
        state.list = action.payload.products;
        state.totalNumberOfButtons = Math.ceil(
          action.payload.total / state.limit
        );
        // console.log(state.totalNumberOfButtons)
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const {
  sortByprice,
  searchByProductName,
  filterByCategory,
} = shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;
