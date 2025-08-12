import React, { useState } from "react";

const SearchBar = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) setCity(input);
    setInput("");
  };

  return (
    <div className="search-bar">
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter city" />
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
};

export default SearchBar;
