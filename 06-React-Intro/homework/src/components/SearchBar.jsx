import React from 'react';

export default function SearchBar(onSearch) {
  
  return (
    <div>
      <input type = "text" placeholder = "city..."/>
      <button onClick={()=> onSearch('buscando')}>Agregar</button>
    </div>
  )
};