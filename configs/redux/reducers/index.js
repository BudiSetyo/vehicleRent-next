import { combineReducers } from "redux";
import userReducers from "./user";
import vehicleReducer from "./vehicles";

const reducers = {
  user: userReducers,
  vehicles: vehicleReducer,
};

export default combineReducers(reducers);
