import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkOutProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // Check if product already exists in cart
      const existingProduct = state.checkOutProducts.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.checkOutProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.checkOutProducts = state.checkOutProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const product = state.checkOutProducts.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.checkOutProducts.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.quantity = Math.max(1, product.quantity - 1);
      }
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } =
  productSlice.actions;

export default productSlice.reducer;
