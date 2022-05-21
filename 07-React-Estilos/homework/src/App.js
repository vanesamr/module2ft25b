import React from 'react';
import styles from './App.module.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

function App() {
  return (
    <>
      <div className= {styles.app}/>
      <div className= {styles.background}/>
      <div className= {styles.container}>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
        <div className= {styles.citiesContainer}>
          <Card
            xl={true}
            name= {data[0]?.name}
            min= {data[0]?.main.temp_min}
            max= {data[0]?.main.temp_max}
            img= {data[0]?.weather[0].icon}
          />
          <Cards cities={data.slice(1)} />
        </div> 
      </div>   
    </>   
  )
}
 export default App;

