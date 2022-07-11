import types from "../actions/types.js";

const initialIpData = {
  error: "",
  ip: "",
  timezone: "",
  org: "",
  city: "",
  region: "",
  postal: "",
};

const ipDataReducer = (state = initialIpData, action) => {
  switch (action.type) {
    case types.FETCH_IP_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default ipDataReducer;
