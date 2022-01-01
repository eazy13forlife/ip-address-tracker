import { combineReducers } from "redux";

import ipDataReducer from "./ipDataReducer.js";

export default combineReducers({
  ipData: ipDataReducer,
});
