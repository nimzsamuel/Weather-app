import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [theme, setTheme] = useState("light");

  const API_KEY = "244cf58d35062a072555fa31add81708"; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setForecast(data.list.filter((_, i) => i % 8 === 0));
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
    fetchForecast();
  }, [city, API_KEY]);

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <SearchBar setCity={setCity} />
      {weather && <WeatherCard weather={weather} />}
      <div className="forecast-container">
        {forecast.map((day, i) => (
          <ForecastCard key={i} data={day} />
        ))}
      </div>
    </div>
  );
};

export default App;
