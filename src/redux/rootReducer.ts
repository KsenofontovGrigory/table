import { combineReducers } from "redux";
import { beersReducer } from "./beersReducer";

export const rootReducer = combineReducers({
  beers: beersReducer,
});
