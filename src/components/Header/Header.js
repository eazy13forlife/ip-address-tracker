import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { fetchIpData } from "../../actions";

import "./Header.scss";

const Header = () => {
  const [ipAddress, setIpAddress] = useState("");

  const ipData = useSelector((state) => {
    return state.ipData;
  });

  const dispatch = useDispatch();

  return (
    <div className="Header">
      <div className="Header__container container">
        <h1 className="Header__heading">IP Address Tracker</h1>
        <form
          action="urlofthepageontheserverthatthisformwillgoto"
          className="Header__form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchIpData(ipAddress));
          }}
        >
          <div className="Header__form-group">
            <input
              type="text"
              className="Header__input"
              value={ipAddress}
              placeholder="Search for any IP address or domain"
              onChange={(e) => {
                setIpAddress(e.target.value);
              }}
            />
            <button type="submit" className="Header__input-button">
              <IoIosArrowForward className="Header__input-icon" />
            </button>
            <span className="Header__error">
              {ipData.status === "fail" ? ipData.message : ""}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
