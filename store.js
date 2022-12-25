import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/authSlice";
const store = configureStore({
  reducer: {
    auth: basketReducer,
  },
});

export default store;
