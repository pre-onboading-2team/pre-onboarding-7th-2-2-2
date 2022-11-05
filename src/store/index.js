import { configureStore } from "@reduxjs/toolkit";

import periodSliceReducer from "./period";
import trendDataSliceReducer from "./trendData";
const store = configureStore({
  reducer: { period: periodSliceReducer, trendData: trendDataSliceReducer },
});

export default store;
