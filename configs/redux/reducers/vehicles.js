const initialValue = [];
const vehicleReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "SET_VEHICLES":
      return action.payload;
    default:
      return state;
  }
};

export default vehicleReducer;
