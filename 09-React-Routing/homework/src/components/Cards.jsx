import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import { useNavigate } from 'react-router-dom';

export default function Cards({cities, onClose}) {
  
  const navigate= useNavigate();

  if(cities && cities.length > 0){
    return (
      <div className="citiesContainer">
        <Card
          max={cities[0].max}
          min={cities[0].min}
          name={cities[0].name}
          img={cities[0].icon}
          onClose={() => onClose(cities[0].id)}
          id={cities[0].id}
          key={cities[0].id}
          xl={true}
          navigate= {() => navigate(`city/${cities[0].id}`)}
        />
        <div className='weatherCards'>
          {cities.slice(1, 4).map((c) =>
            <Card
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.icon}
              onClose={() => onClose(c.id)}
              id={c.id}
              key={c.id}
            /> )}
        </div>
      </div>
    );
  } else {
    return(
      <div className="citiesContainer">
        <div className='alert'>Sin ciudades</div>
      </div>
    )
  }
}
