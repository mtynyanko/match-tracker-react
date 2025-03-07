import { combineReducers } from "@reduxjs/toolkit";
import matchReducer from "./matchReducer";

const rootReducer = combineReducers({
  matches: matchReducer,
});
export default rootReducer;