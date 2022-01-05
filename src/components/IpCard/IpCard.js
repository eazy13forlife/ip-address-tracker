import React from "react";
import { useSelector } from "react-redux";

import "./IpCard.scss";

const IpCard = () => {
  const ipData = useSelector((state) => {
    return state.ipData;
  });

  const {
    status,
    query = "",
    timezone = "",
    isp = "",
    city = "",
    region = "",
    zip = "",
  } = ipData;

  return (
    <div className="IpCard">
      <div className="IpCard__info">
        <h3 className="IpCard__header">Ip Address</h3>
        <p className="IpCard__result">{query}</p>
      </div>
      <div className="IpCard__info">
        <h3 className="IpCard__header">Location</h3>
        <p className="IpCard__result">
          {status === null || status === "fail"
            ? ""
            : `${city}, ${region} ${zip}`}
        </p>
      </div>
      <div className="IpCard__info">
        <h3 className="IpCard__header">Timezone</h3>
        <p className="IpCard__result">{timezone}</p>
      </div>
      <div className="IpCard__info">
        <h3 className="IpCard__header">Isp</h3>
        <p className="IpCard__result">{isp}</p>
      </div>
    </div>
  );
};

export default IpCard;
