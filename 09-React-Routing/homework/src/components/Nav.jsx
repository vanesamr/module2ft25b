import React from 'react';
import SearchBar from './SearchBar.jsx';

function Nav({onSearch}) {
  return (
    <SearchBar onSearch={onSearch}/>
  );
};

export default Nav;
