'use strict'
import React from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='digite o nome do usuario'
      onKeyUp={handleSearch}
    />
  </div>
)

export default Search
