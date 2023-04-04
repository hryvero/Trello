import { combineReducers } from "redux";
import listReducer from "./reducer";

const rootReducer=combineReducers({
  data:listReducer
});

export default rootReducer;