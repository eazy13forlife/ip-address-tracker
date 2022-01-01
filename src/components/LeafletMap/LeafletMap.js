import React from "react";
import { useSelector } from "react-redux";
import { MapContainer } from "react-leaflet";

const LeafletMap = () => {
  console.log(MapContainer);
  const { lat, lon } = useSelector((state) => {
    return state.ipData;
  });
  return <p>hey</p>;
};

export default LeafletMap;
