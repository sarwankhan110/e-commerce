import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product:10
};

export const cartSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},

});

// export const {} = counterSlice.actions

export default cartSlice.reducer