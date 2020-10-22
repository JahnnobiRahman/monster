import React from 'react';

import './search-box.style.css';

// functional component 

// this only renders with props 

export const SearchBox = ({ placeholder, handleChange}) =>
    (
    <input
        className = 'search'
        type='search'
        placeholder= {placeholder}
        onChange = {handleChange}
      
      />  
);