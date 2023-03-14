import React, { useState, useEffect } from 'react'

const Search = ({ search, setSearch }) => {
  /* const [item,setItem] =useState([]) */


  return (
    <div className='container'>
      <h2>
        Buscador
      </h2>
      <input type='text' placeholder='buscar' className='form-control' value={search} onChange={(e) => setSearch(e.target.value)}>
      </input>
      
    </div>
  )
}

export default Search
