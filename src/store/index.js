import { configureStore } from "@reduxjs/toolkit";

import chartFilterSliceReducer from "./chartFilter";
import periodSliceReducer from "./period";
import trendDataSliceReducer from "./trendData";
const store = configureStore({
  reducer: {
    period: periodSliceReducer,
    trendData: trendDataSliceReducer,
    chartFilter: chartFilterSliceReducer,
  },
});

export default store;
