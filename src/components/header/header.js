import React from "react";

import Form from "../form";
import "./header.css";

const Header = ({ getWeather }) => {
  return (
    <header className="header navbar navbar-light bg-light">
      <h1 className="header__title navbar-brand">Weather Forecast</h1>
      <Form getWeather={getWeather} />
    </header>
  );
};

export default Header;
