import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  
  return (
    <div className={styles.SearchBar}>
      <input type = "text" placeholder = "Add city..."/>
      <button onClick={()=> onSearch('Searching...')}>+</button>
    </div>
  )
}

