import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "siddharthe",
  location: "howrah",
};

const Curdslice = createSlice({
  name: "curd",
  initialState,
  reducers: {
    // Define your reducers here
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setName, setLocation } = Curdslice.actions;
export default Curdslice.reducer;
