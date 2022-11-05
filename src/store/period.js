import { createSlice } from "@reduxjs/toolkit";

const initailPeriodState = {
  startDate: "2022-02-02",
  endDate: "2022-03-02",
};

const periodSlice = createSlice({
  name: "period",
  initialState: initailPeriodState,
  reducers: {
    changePeriod(state, action) {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export const changePeriod = periodSlice.actions.changePeriod;
export default periodSlice.reducer;
