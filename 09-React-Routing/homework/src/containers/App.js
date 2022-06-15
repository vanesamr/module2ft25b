import React, {useState}from 'react';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import { Routes, Route } from 'react-router-dom';
import City from '../components/City.jsx';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import './App.css';


function App() {
    const apiKey= process.env.REACT_APP_API_KEY;
    const [cities, setCities] = useState([]);
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }
    function onSearch(ciudad) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then(r => r.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              icon: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
          } else {
            alert("Ciudad no encontrada");
          }
        });
    }
    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
          return ciudad[0];
      } else {
          return null;
      }
    }
    return (
        <div className='full-screen'>
          <div className="app" />
          <div className="background"/>
          <div className="container">
          <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/city/:ciudadId' element={<City />} />
      </Routes> 

            {/* <Routes>  
              <Route path='/' render={() => <Nav onSearch={onSearch} />}/>
              <Route path='/about' component={About}/>
              <Route exact path='/' render={() => (
                <div className="citiesContainer">
                  <Cards cities={cities} onClose={onClose}/>
                  </div>
              )}/>
              <Route path='/ciudad/:ciudadId' render={({match}) => (
                <div className="citiesContainer">
                  <City city={onFilter(match.params.ciudadId)}/>
                </div>
              )}/>
            </Routes> */}
          </div>
        </div>
      );
  }
  
  export default App;
  