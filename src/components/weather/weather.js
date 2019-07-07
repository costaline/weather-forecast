import React, { Fragment } from "react";

import "./weather.css";

const Weather = props => {
  const {
    error,
    name: city,
    main: { temp, humidity } = {},
    weather: [wthObj = {}] = []
  } = props.dataWeather;

  const {
    icon,
    main: currentWeather,
    description: currentWeatherDescription
  } = wthObj;

  const url = `http://openweathermap.org/img/w/${icon}.png`;

  const weatherTrue = (
    <Fragment>
      <table className="table table-borderless table-striped">
        <thead className="text-center">
          <tr>
            <th colSpan="2">
              <div className="table__header d-flex justify-content-between align-items-center">
                <h2 className="weather__city order-2">{city}</h2>
                <span className="weather__in order-1">in</span>
                <img className="weather__icon order-3" src={url} alt="icon" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr>
            <th>Temperature</th>
            <td className="table__data">{temp}</td>
          </tr>
          <tr>
            <th>Humidity</th>
            <td className="table__data">{humidity}</td>
          </tr>
          <tr>
            <th>Condition</th>
            <td className="table__data">{currentWeather}</td>
          </tr>
          <tr>
            <th>Condition Description</th>
            <td className="table__data">{currentWeatherDescription}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );

  const weatherError = (
    <p className="weather__error text-center">{props.dataWeather.error}</p>
  );

  const weatherContent = !error && city ? weatherTrue : weatherError;

  return <main className="weather">{weatherContent}</main>;
};

export default Weather;
