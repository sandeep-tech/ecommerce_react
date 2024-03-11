import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productslice",
  initialState: [],
  reducers: {
    addProducts: (state, action) => {
      return action.payload;
    },
  },
});
export default productSlice.reducer;
export const { addProducts } = productSlice.actions;
