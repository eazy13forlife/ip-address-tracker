import axios from "axios";

import types from "./types.js";

const fetchIpData = (ipAddress) => {
  return async (dispatch) => {
    const response = await axios.get(`http://ip-api.com/json/${ipAddress}`);
    dispatch({
      type: types.FETCH_IP_DATA,
      payload: response.data,
    });
  };
};

export { fetchIpData };
