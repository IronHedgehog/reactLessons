import { createSlice } from "@reduxjs/toolkit";
import { filtersValue } from "./constants";

const filterInitState = {
  status: filtersValue.all,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitState,
  reducers: {
    toggleFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { toggleFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
