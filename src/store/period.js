import { createSlice } from "@reduxjs/toolkit";

import DefaultDate from "../constants/defaultDate";

const { defaultStartDate, defaultEndDate } = DefaultDate;
const initialPeriodState = {
  startDate: defaultStartDate,
  endDate: defaultEndDate,
};

const periodSlice = createSlice({
  name: "period",
  initialState: initialPeriodState,
  reducers: {
    changePeriod(state, action) {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export const changePeriod = periodSlice.actions.changePeriod;
export default periodSlice.reducer;
