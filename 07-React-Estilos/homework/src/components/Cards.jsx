import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css';

export default function Cards({cities}) {
  
  return (
    <div className= {styles.weatherCards}>
      {cities.map((city) => (
      <Card
      key= {city.name}
      name= {city.name}
      min= {city.main.temp_min}
      max= {city.main.temp_max}
      img= {city.weather[0].icon}
      />  
  ))}
    </div>
  );
};
