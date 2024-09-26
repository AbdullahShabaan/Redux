import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get("http://localhost:5005/products");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
