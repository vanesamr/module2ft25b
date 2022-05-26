import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

export default function App() {
  const [cities, setCities]= useState([]);

    function onSearch (city){
      fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
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
            alert ('Ciudad no encontrada');
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
  