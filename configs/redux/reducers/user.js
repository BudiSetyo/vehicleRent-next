const initialValue = {
  email: "",
  password: "",
  isLogin: false,
  name: "Jhon Doe",
  notif: 12,
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLogin: true,
        name: "Jhon Doe",
        notif: 12,
      };

    case "USER_LOGOUT":
      return {
        ...state,
        email: "",
        password: "",
        isLogin: false,
        name: "Jhon Doe",
        notif: 12,
      };

    default:
      return state;
  }
};

export default userReducer;
