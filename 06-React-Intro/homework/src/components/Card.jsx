import React from 'react';

export default function Card(img, max, min, name, onClose) {
  
  return ( 
    <div>
      <button onCLick= {onCLose}>X</button>
      <h4>{name}</h4>
      <p>{min}</p>
      <p>{max}</p>
      <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt= "img not found"></img>
    </div>
  )
};