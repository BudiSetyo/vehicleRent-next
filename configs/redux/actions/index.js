import store from "../store";
import { setVehicles } from "./vehicles";

const initAppAction = () => {
  store.dispatch(setVehicles());
};

export default initAppAction;
