import { actionTypes } from "@/configs";

export const userLogin = (data) => (dispatch) => {
  return dispatch({ type: actionTypes.USER_LOGIN, payload: data });
};

export const userLogout = () => (dispatch) => {
  return dispatch({ type: actionTypes.USER_LOGOUT });
};

export const userUpdateAvatar = (data) => (dispatch) => {
  return dispatch({ type: actionTypes.USER_UPDATE_AVATAR, payload: data });
};
