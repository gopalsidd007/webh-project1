import { configureStore } from "@reduxjs/toolkit";
import CrudReducer from "../Slice/CrudSlice";

const ReduxStore = configureStore({
  reducer: {
    curd: CrudReducer,
  },
});

export default ReduxStore;
