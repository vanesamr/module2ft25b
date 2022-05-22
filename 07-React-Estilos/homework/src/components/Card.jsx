import React from 'react';
import styles from './Card.module.css';

export default function Card({img, max, min, name, onClose, className, xl}) {
  const cardClass = xl ? styles.cardXl : styles.cardMd;
  return (
    <div className= {`${styles.weatherCard} ${cardClass} ${className || ""}`}>
        <button className={styles.button} onClick= {onClose}>x</button>
        <span>{name}</span>
        <div className={styles.weatherInformation}>
          <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt= "Icono del clima"/>
          <div className= {styles.temp}>
            <div className= {styles.min}>
              <span>min</span>
              <span>{min}°</span>
            </div>
            <div className= {styles.max}>
              <span>max</span>
              <span>{max}°</span>
            </div>
          </div>
        </div>
      </div>
  );
};