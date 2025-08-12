import React from "react";

const WeatherIcon = ({ main }) => {
  // simple mapping; you can expand with SVGs
  const map = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️"
  };
  return <span className="big-icon">{map[main] || "🌤️"}</span>;
};

const WeatherCard = ({ weather }) => {
  const name = weather?.name || "Unknown";
  const temp = Math.round(weather?.main?.temp ?? 0);
  const desc = weather?.weather?.[0]?.description ?? "";
  const main = weather?.weather?.[0]?.main ?? "";

  return (
    <section className="weather-card premium-card">
      <div className="left">
        <WeatherIcon main={main} />
      </div>
      <div className="right">
        <h2 className="city">{name}</h2>
        <div className="temp-animated">
          <span className="temp">{temp}°C</span>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </section>
  );
};

export default WeatherCard;
