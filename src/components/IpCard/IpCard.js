import React from "react";
import { useSelector } from "react-redux";

import "./IpCard.scss";

const IpCard = () => {
  const ipData = useSelector((state) => {
    return state.ipData;
  });

  const {
    error,
    ip = "",
    timezone = "",
    org = "",
    city = "",
    region = "",
    postal = "",
  } = ipData;

  console.log(ipData);
  return (
    <div className="IpCard">
      <div className="IpCard__info">
        <h3 className="IpCard__header">Ip Address</h3>
        <p className="IpCard__result">{ip}</p>
      </div>
      <div className="IpCard__info">
        <h3 className="IpCard__header">Location</h3>
        <p className="IpCard__result">
          {error ? "" : `${city}, ${region} ${postal}`}
        </p>
      </div>
      <div className="IpCard__info">
        <h3 className="IpCard__header">Timezone</h3>
        <p className="IpCard__result">{timezone}</p>
      </div>
      <div className="IpCard__info">
        <h3 className="IpCard__header">Org</h3>
        <p className="IpCard__result">{org}</p>
      </div>
    </div>
  );
};

export default IpCard;
