const initialValue = {
  data: {},
  isLogin: false,
  token: "",
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        data: { ...action.payload.data, notif: 10 },
        isLogin: true,
        token: action.payload.token,
      };

    case "USER_LOGOUT":
      return {
        ...state,
        data: {},
        isLogin: false,
        token: "",
      };

    case "USER_UPDATE_AVATAR":
      return {
        ...state,
        data: { ...state.data, avatar: action.payload },
      };

    default:
      return state;
  }
};

export default userReducer;
