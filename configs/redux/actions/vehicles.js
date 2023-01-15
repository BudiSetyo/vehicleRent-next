import { actionTypes } from "@/configs";
import axios from "axios";
const api = process.env.API_URL;

export const setVehicles = () => (dispatch) => {
  axios({
    method: "get",
    url: `${api}/vehicles/?row=100`,
  })
    .then((response) => {
      return dispatch({
        type: actionTypes.SET_VEHICLES,
        payload: response.data.data.results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
