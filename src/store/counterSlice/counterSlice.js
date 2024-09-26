import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: { number: 0 },
  name: "counter",
  reducers: {
    increment: (state, action) => {
      state.number += action.payload;
    },
    decrement: (state, action) => {
      state.number -= action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
