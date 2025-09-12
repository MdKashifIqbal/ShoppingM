import {configureStore} from "@reduxjs/toolkit"
import productListReducer from "../slice/shoppingCardslice"
import productDetailsReducer from "../slice/productDetails"

const store = configureStore({
    reducer:{
        productList : productListReducer,
        productDetails:productDetailsReducer
    }
})

export default store