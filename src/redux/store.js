import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { messagesReducer, searchReducer } from "../redux/reducers";

export const store = configureStore({
  reducer: combineReducers({
    data: messagesReducer,
    search: searchReducer,
  }),
});
