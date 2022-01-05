import { combineReducers } from "redux";

import ipDataReducer from "./ipDataReducer.js";
import currentLatLonReducer from "./currentLatLongReducer.js";

export default combineReducers({
  ipData: ipDataReducer,
  currentLatLon: currentLatLonReducer,
});
