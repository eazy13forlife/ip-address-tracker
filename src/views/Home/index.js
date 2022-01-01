import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Index.scss";
import Header from "../../components/Header/Header.js";
import IpCard from "../../components/IpCard/IpCard.js";
import { fetchIpData } from "../../actions/";
import LeafletMap from "../../components/LeafletMap/LeafletMap.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIpData(""));
  }, []);

  return (
    <div className="Home">
      <Header />
      <main>
        <div className="Home__container container">
          <IpCard />
        </div>
        <div className="Map">
          <LeafletMap />
        </div>
      </main>
    </div>
  );
};

export default Home;
