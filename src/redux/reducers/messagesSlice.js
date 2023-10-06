import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import { sortMessagesByPriority } from "../../utils/sortMessages";

const initialState = {
  messages: [],
  displayedMessages: [],
  searchResultMessages: [],
  searchResultLoading: false,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setInitialMessages: (state, { payload }) => {
      state.messages = payload;
      state.displayedMessages = payload;
    },

    sortMessages: (state, { payload }) => {
      if (payload === "all") {
        state.displayedMessages = state.messages;
      } else if (payload === "priority") {
        state.displayedMessages = sortMessagesByPriority(state.messages);
      } else if (payload === "sentiment") {
        state.displayedMessages = _.orderBy(state.messages, ["sentiment"], ["desc"]);
      } else if (payload === "replied_to") {
        state.displayedMessages = _.orderBy(state.messages, ["replied_to"], ["desc"]);
      } else if (payload === "platform") {
        state.displayedMessages = _.orderBy(state.messages, ["platform"]);
      }
    },

    setSearchResultMessages: (state, { payload }) => {
      state.searchResultMessages = payload;
    },

    setSearchResultsLoading: (state, { payload }) => {
      state.searchResultLoading = payload;
    },
  },
});

export const { setInitialMessages, sortMessages, setSearchResultMessages ,setSearchResultsLoading} = messagesSlice.actions;

export default messagesSlice.reducer;
