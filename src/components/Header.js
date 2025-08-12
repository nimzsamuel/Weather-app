import React from "react";

const Header = ({ theme, setTheme }) => {
  return (
    <header>
      <h1>Weather App</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
};

export default Header;
