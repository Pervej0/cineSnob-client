import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchListData: [],
    error: "",
  },
  reducers: {
    handleWatchListData: (state, action) => {
      state.watchListData = action.payload;
    },
  },
});

export const { handleWatchListData } = watchListSlice.actions;
export const watchListData = (state) => state.watchListStatus.watchListData;
export default watchListSlice.reducer;
