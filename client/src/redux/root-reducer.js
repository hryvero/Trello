import { combineReducers } from "redux";
import listReducer from "./lists/listReducer";

const rootReducer=combineReducers({
  list: listReducer
});

export default rootReducer;