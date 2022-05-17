import React from 'react';

export default function Cards({cities}) {
  
  return ( 
    {
      cities.map(city => (
    <Cards
    key = {city.id} 
    max = {city.main.temp_max}
    min = {city.main.temp_min}
    name = {city.name}
    onCLose = {()=> alert (city.name)}
    img = {city.weather[0].icon}
    />))}
    )
};