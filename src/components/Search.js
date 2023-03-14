import React, { useState, useEffect } from 'react'

const Search = ({ setSearch }) => {
  /* const [item,setItem] =useState([]) */



  return (
    <div className='container'>
      <h2>
        Buscador
      </h2>
      <input type='text' placeholder='buscar' className='form-control' onChange={(e) => setSearch(e.target.value)} />

    </div>
  )
}

export default Search
