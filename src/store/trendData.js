import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import DefaultDate from "../constants/defaultDate";
import { TREND_DATA_URL } from "../constants/url";
import { changePeriod } from "./period";

const { defaultStartDate, defaultEndDate } = DefaultDate;

const getTrendData = createAsyncThunk("GET_TREND_DATA", async () => {
  const res = await axios.get(TREND_DATA_URL);

  const originalArr = res.data.report.daily;
  const newArr = originalArr.map((data) => ({
    ...data,
    exposure: Math.round((data.click / data.ctr) * 100),
    returns: (data.roas * data.cost) / 100,
  }));

  return newArr;
});

const initialTrendDataState = {
  dailyData: [],
  filteredData: [],
};

const trendDataSlice = createSlice({
  name: "trendData",
  initialState: initialTrendDataState,
  extraReducers: (builder) => {
    builder.addCase(getTrendData.fulfilled, (state, action) => {
      state.dailyData = action.payload;
      state.filteredData = action.payload.filter((data) => {
        return data.date >= defaultStartDate && data.date <= defaultEndDate;
      });
    });
    builder.addCase(changePeriod, (state, action) => {
      const { startDate: newStartDate, endDate: NewEndDate } = action.payload;
      state.filteredData = state.dailyData.filter((data) => {
        return data.date >= newStartDate && data.date <= NewEndDate;
      });
    });
  },
});

export { getTrendData };
export default trendDataSlice.reducer;
