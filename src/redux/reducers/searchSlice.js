import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchOptionsOpen: false,
  searchResultsOpen: false,
  selectedOption: { type: "all", name: "الكل" },
  searchBoxClicks: 0,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchOptionsOpen: (state, { payload }) => {
      state.searchOptionsOpen = payload;
    },
    setSearchResultsOpen: (state, { payload }) => {
      state.searchResultsOpen = payload;
    },
    setSelectedOption: (state, { payload }) => {
      state.selectedOption = payload;
    },

    incrementSearchBoxClicks: (state) => {
      state.searchBoxClicks = state.searchBoxClicks += 1;
    },
  },
});

export const {
  setSearchOptionsOpen,
  setSearchResultsOpen,
  setSelectedOption,
  incrementSearchBoxClicks,
} = searchSlice.actions;

export default searchSlice.reducer;
