// src/components/SearchBar.js
import React, { useState } from 'react';
import './searchbox.css';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="search">
      <input
        type="text"
        className="input"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => onSearch(query)}
        className="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
