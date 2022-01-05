import types from "./types.js";

const updateLatLon = (lat, lon) => {
  return {
    type: types.UPDATE_LAT_LON,
    payload: [lat, lon],
  };
};

export { updateLatLon };
