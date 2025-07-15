import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/cartSlice";

export default configureStore({
  reducer: {
    product: productReducer,// 
  },
});
