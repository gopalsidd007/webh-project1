import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = "https://fakestoreapi.com/products";
const new_url = "https://jsonplaceholder.typicode.com/posts";

export const fetchpost = createAsyncThunk("products", async () => {
  const res = await axios.get(api_url);
  console.log("Thedata", res.data);
  return res?.data;
});

const intVal = {
  loading: false,
  prodata: [],
  error: null,
};

const ProductSlice = createSlice({
  name: "product",
  initialState: intVal,
  extraReducers: (builder) => {
    builder.addCase(fetchpost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchpost.fulfilled, (state, action) => {
      state.loading = false;
      state.prodata = action.payload;
      state.error = "";
    });
    builder.addCase(fetchpost.rejected, (state, action) => {
      state.loading = false;
      state.prodata = [];
      state.error = action.payload.error;
    });
  },
});

export default ProductSlice.reducer;
