import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app-slice";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
