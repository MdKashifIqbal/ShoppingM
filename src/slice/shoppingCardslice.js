import { createSlice } from "@reduxjs/toolkit";
import { act, useEffect } from "react";
import ProductDetails from "../ProductDetails";
import { useQueries } from "@tanstack/react-query";

const initialState = {
  allProducts: [],
  list: [{ title: "Hey!!!!!!" }],
  totalNumberOfButtons: null,
  limit: 10,
  loading: true,
  error: null,
};


const shoppingCardSlice = createSlice({
  name: "shoppingCard",
  initialState,
  reducers: {
    fetchProducts:(state,action)=>{
      // console.log(action.payload)
      const {products, total} = action.payload
      state.allProducts = products
      state.list = products
      state.totalNumberOfButtons = total
      state.loading = false
    },
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
  }
});

export const {
  sortByprice,
  searchByProductName,
  filterByCategory,
  fetchProducts,

} = shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;
