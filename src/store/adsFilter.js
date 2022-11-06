import { createSlice } from "@reduxjs/toolkit";

const initialfilterState = {
  filter: "all",
};

const adsfilterSlice = createSlice({
  name: "adsFilter",
  initialState: initialfilterState,
  reducers: {
    changeAdsfilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const changeAdsfilter = adsfilterSlice.actions.changeAdsfilter;
export default adsfilterSlice.reducer;
