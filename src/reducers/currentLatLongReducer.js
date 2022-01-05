import types from "../actions/types.js";

const currentLatLonReducer = (state = [], action) => {
  switch (action.type) {
    case types.UPDATE_LAT_LON:
      return action.payload;
    default:
      return state;
  }
};

export default currentLatLonReducer;
