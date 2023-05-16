import { combineReducers } from "redux";
import listReducer from "./lists/listReducer";
import taskReducer from "./tasks/taskReducer";

const rootReducer=combineReducers({
  list: listReducer,
  tasks:taskReducer
});

export default rootReducer;