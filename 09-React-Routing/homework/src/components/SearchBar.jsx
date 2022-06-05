import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity]= useState("")
  return (
    <form className="SearchBar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        type="text"
        placeholder="Agregar ciudad..."
        value= {city}
        onChange= {e => setCity(e.target.value)}
      />
      <input type="submit" value="+" />
    </form>
  );
}
