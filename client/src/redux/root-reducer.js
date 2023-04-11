import { combineReducers } from "redux";
import listReducer from "./reducer";

const rootReducer=combineReducers({
  list: listReducer
});

export default rootReducer;