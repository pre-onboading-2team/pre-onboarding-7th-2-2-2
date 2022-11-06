import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ADS_DATA_URL } from "../constants/url";

const getAdsData = createAsyncThunk("GET_ADS_DATA", async () => {
  const res = await axios.get(ADS_DATA_URL);
  return res.data.ads;
});

const initialAdsDataState = {
  ads: [],
  filteredAds: [],
};

const adsDataSlice = createSlice({
  name: "adsData",
  initialState: initialAdsDataState,
  extraReducers: (builder) => {
    builder.addCase(getAdsData.fulfilled, (state, action) => {
      state.ads = [...action.payload];
    });
  },
});

export { getAdsData };
export default adsDataSlice.reducer;
