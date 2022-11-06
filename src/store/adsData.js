import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ADS_DATA_URL } from "../constants/url";
import { changeAdsfilter } from "./adsFilter";

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
      if (action.meta.arg.filter === "all") {
        state.filteredAds = [...action.payload];
        return;
      }
      state.filteredAds = state.ads.filter(
        (ad) => ad.status === action.meta.arg.filter
      );
    });
    builder.addCase(changeAdsfilter, (state, action) => {
      if (action.payload === "all") {
        state.filteredAds = [...state.ads];
        return;
      }
      state.filteredAds = state.ads.filter(
        (ad) => ad.status === action.payload
      );
    });
  },
});

export { getAdsData };
export default adsDataSlice.reducer;
