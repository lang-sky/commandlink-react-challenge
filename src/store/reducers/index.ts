import { combineReducers } from "@reduxjs/toolkit";
import { personReducer } from "./personReducer";

export const rootReducer = combineReducers({
  person: personReducer,
});
