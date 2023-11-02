import { combineReducers } from "@reduxjs/toolkit";
import { personReducer } from "./personSlice";

export const rootReducer = combineReducers({
  person: personReducer,
});

export * from "./personSlice";
