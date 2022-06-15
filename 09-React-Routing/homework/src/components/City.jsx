import React from 'react';
import './City.css';

export default function City ({city}){
    
    return (
        <div className="cityContainer">
            {city && (
                <>
                    <h4 className='cityTitle'>{city.name}</h4>
                  <div className='info-img'>  
                    <img className='cityImg' src= {`http://openweathermap.org/img/wn/${city.icon}@2x.png`} alt= "Icono del clima"/>
                    <div className="info">   
                        <div>Temperatura: {Math.floor(city.temp-273.15)}°C</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind}km/h</div>
                        <div>Cantidad de nubes: {city.clouds}%</div>
                        <div>Latitud: {city.latitud}°</div>
                        <div>Longitud: {city.longitud}°</div>
                    </div>
                  </div>  
                </>
            )}
        </div>
    )
}