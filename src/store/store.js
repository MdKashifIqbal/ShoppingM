import {configureStore} from "@reduxjs/toolkit"
import productListReducer from "../slice/shoppingCardslice"
import productDetailsReducer from "../slice/productDetails"
import { productApi } from "../custom-hook/useProduct"

const store = configureStore({
    reducer:{
        [productApi.reducerPath] : productApi.reducer,
        productList : productListReducer,
        productDetails:productDetailsReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware)
    
})

export default store