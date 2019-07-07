class WeatherService {
  _apiKey = "8cb9fe37084917b22588a3ef876e2f56";
  _urlForecast = `http://api.openweathermap.org/data/2.5/weather?q=`;

  async getWeather(city) {
    const res = await fetch(
      `${this._urlForecast}${city}&APPID=${this._apiKey}&units=metric`
    );

    if (!res.ok) {
      throw new Error(`Could not fetch: ${res.statusText}`);
    }

    const body = await res.json();
    return body;
  }
}

export default WeatherService;
