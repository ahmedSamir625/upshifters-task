import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { messagesReducer } from "../redux/reducers";

export const store = configureStore({
  reducer: combineReducers({
    data: messagesReducer,
  }),
});
