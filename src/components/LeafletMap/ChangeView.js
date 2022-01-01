import React from "react";
import { useMap } from "react-leaflet";

const ChangeView = ({ lat, lon, zoom }) => {
  const map = useMap();
  map.setView([lat, lon], zoom);
  return null;
};

export default ChangeView;
