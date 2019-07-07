import React from "react";

const Form = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather} className="header__form form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        name="city"
        placeholder="enter city"
      />
      <button className="btn btn-outline-success my-2 my-sm-o" type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
