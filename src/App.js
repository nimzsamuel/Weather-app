import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import "./App.css";

// put your key here or read from process.env.REACT_APP_OWM_KEY
const API_KEY = "244cf58d35062a072555fa31add81708";

const App = () => {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const fetchAll = async () => {
      setLoading(true);
      setError("");
      try {
        // fetch current weather
        const wRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=${API_KEY}&units=metric`
        );
        const wData = await wRes.json();
        if (!mounted) return;

        if (wData.cod && wData.cod !== 200) {
          throw new Error(wData.message || "Could not fetch weather");
        }

        // fetch forecast
        const fRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
            city
          )}&appid=${API_KEY}&units=metric`
        );
        const fData = await fRes.json();
        if (!mounted) return;

        if (fData.cod && fData.cod !== "200") {
          throw new Error(fData.message || "Could not fetch forecast");
        }

        // pick one forecast per day (every 8 entries = 24h)
        const daily = Array.isArray(fData.list)
          ? fData.list.filter((_, i) => i % 8 === 0).slice(0, 5)
          : [];

        setWeather(wData);
        setForecast(daily);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Network error — showing fallback data");

        // fallback mock data (so UI never blanks)
        setWeather({
          name: city,
          main: { temp: 25, humidity: 50 },
          weather: [{ main: "Clear", description: "Sunny" }],
          wind: { speed: 8 }
        });
        setForecast([
          { dt: 1, main: { temp: 26 }, weather: [{ main: "Clouds", description: "Partly cloudy" }] },
          { dt: 2, main: { temp: 24 }, weather: [{ main: "Rain", description: "Light rain" }] },
          { dt: 3, main: { temp: 27 }, weather: [{ main: "Clear", description: "Sunny" }] }
        ]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchAll();
    return () => {
      mounted = false;
    };
  }, [city]);

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <SearchBar setCity={setCity} />
        {loading && <div className="loader">Loading…</div>}

        {error && <div className="notice">⚠️ {error}</div>}

        {weather && <WeatherCard weather={weather} theme={theme} />}

        <div className="forecast-grid">
          {forecast.length > 0 &&
            forecast.map((day, i) => <ForecastCard key={i} data={day} />)}
        </div>
      </div>
      <footer className="footer">Nimz Weather App • Powered by OpenWeatherMap</footer>
    </div>
  );
};

export default App;
