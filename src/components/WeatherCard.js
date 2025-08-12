import React from "react";

const WeatherCard = ({ weather }) => {
  const { name, main, weather: w, wind, sys } = weather;
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <h3>{Math.round(main.temp)}°C</h3>
      <p>{w[0].description}</p>
      <div className="extras">
        <p>💧 Humidity: {main.humidity}%</p>
        <p>💨 Wind: {wind.speed} m/s</p>
        <p>🌅 Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>🌇 Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
