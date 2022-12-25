import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/authSlice";
import appReducer from "./features/appSlice";
const store = configureStore({
  reducer: {
    auth: basketReducer,
    app: appReducer,
  },
});

export default store;
