import { configureStore } from "@reduxjs/toolkit";

import periodSliceReducer from "./period";

const store = configureStore({
  reducer: { period: periodSliceReducer },
});

export default store;
