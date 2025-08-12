import React from "react";

const ForecastCard = ({ data }) => {
  const temp = Math.round(data?.main?.temp ?? 0);
  const desc = data?.weather?.[0]?.description ?? "";
  const time = data?.dt_txt || ""; // may be missing in mock data

  return (
    <article className="forecast-card premium-card small">
      <div className="fc-top">{time ? time.split(" ")[0] : "Day"}</div>
      <div className="fc-mid">
        <div className="fc-temp">{temp}°C</div>
        <div className="fc-desc">{desc}</div>
      </div>
    </article>
  );
};

export default ForecastCard;
