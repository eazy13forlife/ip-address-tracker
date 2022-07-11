import axios from "axios";

import types from "./types.js";
import { updateLatLon } from "./latlon.js";

const fetchIpData = (ipAddress) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://ipapi.co/${ipAddress}/json`);
      console.log(response);
      //if successful, call updateLatLon so we can use those lat/lon values for our leaflet map. If not successful,dont update anything. Our leaflet map will use the most recent successful lat/lon values
      const { error, latitude: lat, longitude: lon } = response.data;
      if (!error) {
        dispatch(updateLatLon(lat, lon));
      }

      dispatch({
        type: types.FETCH_IP_DATA,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: types.FETCH_IP_DATA,
        payload: {},
      });
    }
  };
};

export { fetchIpData };
