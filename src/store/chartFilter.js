import { createSlice } from "@reduxjs/toolkit";

const initialfilterState = {
  leftFilterEntries: ["click", "클릭수"],
  rightFilterEntries: ["cost", "광고비"],
};

const filterSlice = createSlice({
  name: "period",
  initialState: initialfilterState,
  reducers: {
    changefilter(state, action) {
      if (action.payload.leftFilterEntries) {
        state.leftFilterEntries = action.payload.leftFilterEntries;
      }

      if (action.payload.rightFilterEntries) {
        state.rightFilterEntries = action.payload.rightFilterEntries;
      }
    },
  },
});

export const changefilter = filterSlice.actions.changefilter;
export default filterSlice.reducer;
