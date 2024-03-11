import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      return action.payload;
    },
  },
});
export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
