import { createSlice } from "@reduxjs/toolkit";
import {
  sortMessagesByPlatform,
  sortMessagesByPriority,
  sortMessagesByRepliedTo,
  sortMessagesByUserSentiment,
} from "../../utils/sortMessages";

const initialState = {
  messages: [],
  displayedMessages: [],
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
        state.displayedMessages = sortMessagesByUserSentiment(state.messages);
      } else if (payload === "replied_to") {
        state.displayedMessages = sortMessagesByRepliedTo(state.messages);
      } else if (payload === "platform") {
        state.displayedMessages = sortMessagesByPlatform(state.messages);
      }
    },
  },
});

export const { setInitialMessages, sortMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
