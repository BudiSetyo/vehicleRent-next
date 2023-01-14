import { actionTypes } from "@/configs";
import axios from "axios";
const api = process.env.API_URL;

export const setHistory = (token) => (dispatch) => {
  axios({
    method: "get",
    url: `${api}/reservations`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return dispatch({
        type: actionTypes.SET_HISTORY,
        payload: response.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
