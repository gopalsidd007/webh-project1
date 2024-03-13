import { configureStore } from "@reduxjs/toolkit";
import CrudSlice from "../Slice/CrudSlice";

const ReduxStore = configureStore({
  reducer: {
    curd: CrudSlice,
  },
});

export default ReduxStore;
