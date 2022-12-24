import vehicles from "./vehicles.json";
import axios from "axios";
const api = process.env.API_URL;

let dataVehicle;

const getVehicles = () => {
  axios({
    method: "get",
    url: `${api}/vehicles`,
  })
    .then((response) => {
      dataVehicle = response.data.data.results;
      // console.log(response.data.data.results);
      return dataVehicle;
    })
    .catch((err) => {
      console.log(err);
    });
};

let vehicleData = vehicles.objects;

export { vehicleData, getVehicles };
