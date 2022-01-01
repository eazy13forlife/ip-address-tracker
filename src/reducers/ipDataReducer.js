import types from "../actions/types.js";

const initialIpData = {
  status: null,
  country: "",
  countryCode: "",
  region: "",
  regionName: "",
  city: "",
  zip: "",
  lat: "",
  lon: "",
  timezone: "",
  isp: "",
  query: "",
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
