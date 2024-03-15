import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      return action.payload;
    },
    deleteProductFromCart: (state, action) => {
      return action.payload;
    },
    updateProductToCart: (state, action) => {
      return action.payload;
    },
  },
});
export const { addProductToCart, deleteProductFromCart, updateProductToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
