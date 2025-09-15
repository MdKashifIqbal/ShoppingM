import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { use } from "react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (bulider) => ({
    getProducts: bulider.query({
      query: ({ limit = 10, page_no = 1, id }) =>
        id
          ? `products/${id}`
          : `products?limit=${limit}&skip=${(page_no - 1) * limit}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
