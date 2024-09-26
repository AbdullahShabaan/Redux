import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice/counterSlice";
import productsSlice from "./productsSlice/productsSlice";

const store = configureStore({
  reducer: { counterSlice, productsSlice },
});
export default store;
