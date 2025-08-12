import React from "react";

const Header = ({ theme, setTheme }) => {
  return (
    <header className="header">
      <div className="logo">
        <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#ffd86f" />
              <stop offset="1" stopColor="#ff7eb3" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#g1)" />
        </svg>
        <h1>Weather Premium</h1>
      </div>

      <div className="header-controls">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;
