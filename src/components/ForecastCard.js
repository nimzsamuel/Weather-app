import React from "react";

const ForecastCard = ({ data }) => {
  const date = new Date(data.dt * 1000).toLocaleDateString(undefined, { weekday: "long" });
  return (
    <div className="forecast-card">
      <h4>{date}</h4>
      <p>{Math.round(data.main.temp)}°C</p>
      <p>{data.weather[0].main}</p>
    </div>
  );
};

export default ForecastCard;
