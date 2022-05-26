import React from 'react';
import './Card.css';

export default function Card(props) {
  const {max, min, name, img, onClose, className, xl} = props
  const cardClass = xl ? 'cardXl' : 'cardMd';

  return (
    <div className= {`weatherCard ${cardClass} ${className || ""}`}>
        <button className='button' onClick= {onClose}>x</button> 
        <span>{name}</span>
        <div className='weatherInformation'>
          <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt= "Icono del clima"/>
          <div className= 'temp'>
            <div className= 'min'>
              <span>min</span>
              <span>{min}°</span>
            </div>
            <div className= 'max'>
              <span>max</span>
              <span>{max}°</span>
            </div>
          </div>
        </div>
      </div>
    )
  };

