import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./features/ConfigSlice";
export const store = configureStore({
  reducer: {
    config: configReducer,
  },
});
