import React, { useState } from "react";

const SearchBar = ({ setCity }) => {
  const [q, setQ] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = q.trim();
    if (!trimmed) return;
    setCity(trimmed);
    setQ("");
  };

  return (
    <form className="search" onSubmit={submit}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="search-input"
        placeholder="Search city (e.g. London, Lagos, Tokyo)"
      />
      <button className="search-btn" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
