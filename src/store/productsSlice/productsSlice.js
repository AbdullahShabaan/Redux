import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./act/actGetProducts";

const productsSlice = createSlice({
  initialState: { data: [], isLoading: false, error: null },
  name: "products",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
  },
});

export default productsSlice.reducer;
