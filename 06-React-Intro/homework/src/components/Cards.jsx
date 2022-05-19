import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities}) {
  
  return ( 
      cities.map(city => (
      <Card
        key = {city.id} 
        max = {city.main.temp_max}
        min = {city.main.temp_min}
        name = {city.name}
        onClose = {()=> alert(city.name)}
        img = {city.weather[0].icon}
      />
      )))
};