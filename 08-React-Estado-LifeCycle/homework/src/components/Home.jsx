import React, {useState} from 'react';
import Cards from '../../src/components/Cards';
import Nav from '../../src/components/Nav';

export default function Home() {

  const apiKey= process.env.REACT_APP_API_KEY;
  const [cities, setCities]= useState([]);


    function onSearch (city){
      fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then (ans => ans.json())
        .then (weather => {
          if (weather.main !== undefined){
            const newCity ={
              name: weather.name,
              min: Math.round(weather.main.temp_min),
              max: Math.round(weather.main.temp_max),
              icon: weather.weather[0].icon,
              id: weather.id
            }
            setCities (oldCities => [...oldCities, newCity]);
          } else {
            alert ('City not found...');
          }
        })
    }
  
    function onClose (id){
      setCities (c => c.filter(city => city.id !== id));
    }
    return (
      <>
        <div className="app" />
        <div className="background"/>
        <div className="container">
          <Nav onSearch={onSearch} />
          <div className="citiesContainer">
            <Cards cities={cities} onClose={onClose} />
          </div>
        </div>
      </>
    );
  }