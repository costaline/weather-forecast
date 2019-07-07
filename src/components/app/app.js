import React, { Component, Fragment } from "react";

import Header from "../header";
import Weather from "../weather";
import WeatherService from "../../services/weather-service";

class App extends Component {
  weatherService = new WeatherService();

  state = {
    error: undefined
  };

  updateWeather = evt => {
    evt.preventDefault();

    this.weatherService
      .getWeather(evt.target.elements.city.value)
      .then(res => {
        this.setState({
          ...res,
          error: false
        });
      })
      .catch(this.weatherError);
  };

  // for style start
  // constructor() {
  //   super();
  //   this.updateWeather("omsk");
  // }

  // updateWeather = city => {
  //   this.weatherService
  //     .getWeather(city)
  //     .then(res => {
  //       this.setState({
  //         ...res,
  //         error: false
  //       });
  //     })
  //     .catch(this.weatherError);
  // };

  // for style finish

  weatherError = err => {
    this.setState({
      error: err.message
    });
  };

  render() {
    return (
      <Fragment>
        <Header getWeather={this.updateWeather} />
        <Weather dataWeather={this.state} />
      </Fragment>
    );
  }
}

export default App;
