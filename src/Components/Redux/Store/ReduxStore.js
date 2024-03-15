import { configureStore } from "@reduxjs/toolkit";
import CrudReducer from "../Slice/CrudSlice";
import ProductReducer from "../Slice/ProductSlice";

const ReduxStore = configureStore({
  reducer: {
    curd: CrudReducer,
    product:ProductReducer,
  },
});

export default ReduxStore;
