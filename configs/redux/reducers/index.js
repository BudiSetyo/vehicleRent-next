import { combineReducers } from "redux";
import userReducers from "./user";
import vehicleReducer from "./vehicles";
import historyReducer from "./history";

const reducers = {
  user: userReducers,
  vehicles: vehicleReducer,
  history: historyReducer,
};

export default combineReducers(reducers);
