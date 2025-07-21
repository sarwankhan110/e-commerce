import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/Slices/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
