import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ filteredCountries }) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const query = `&query=${filteredCountries[0].name}`;
    const key = process.env.REACT_APP_NOT_SECRET_CODE;
    axios
      .get(`http://api.weatherstack.com/current?access_key=${key}${query}`)
      .then((response) => {
        setWeatherData(response.data.current);
      });
  }, []);

  return (
    <div>
      <p>
        <strong>temperature</strong>: {weatherData.temperature} Celsius
      </p>
      <img src={weatherData.weather_icons} alt="current weather icon" />
      <p>
        <strong>wind</strong>: {weatherData.wind_speed} mph direction&nbsp;
        {weatherData.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
