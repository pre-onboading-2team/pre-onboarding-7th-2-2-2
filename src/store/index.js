import { configureStore } from "@reduxjs/toolkit";

import asdDataSliceReducer from "./adsData";
import adsFilterSliceReducer from "./adsFilter";
import chartFilterSliceReducer from "./chartFilter";
import periodSliceReducer from "./period";
import trendDataSliceReducer from "./trendData";

const store = configureStore({
  reducer: {
    period: periodSliceReducer,
    trendData: trendDataSliceReducer,
    chartFilter: chartFilterSliceReducer,
    adsData: asdDataSliceReducer,
    adsFilter: adsFilterSliceReducer,
  },
});

export default store;
