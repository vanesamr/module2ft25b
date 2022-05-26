import React from 'react';
import './Nav.css';
import SearchBar from './SearchBar.jsx';

function Nav({onSearch}) {
  return (
    <SearchBar onSearch={onSearch}/>
  );
};

export default Nav;
