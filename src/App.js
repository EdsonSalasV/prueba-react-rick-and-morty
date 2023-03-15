import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Character from './components/Character'
import Pages from './components/Pages';
import Search from './components/Search';




function App() {

  /* const searchComponent = () =>{

    const [users, setUsers] = useState([]) */
    
  const [search, setSearch] = useState('')

  const [pageNumber, setPageNumber] = useState(1)

  const [character, setCharacter] = useState([])

  const [info, setInfo] = useState({})

  /*   const [query, setQuery] =useState ('')
   */

  const urlApi = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

  /* const fetchCharacter = async ()=>{
    const response = await fetch(urlApi)
    const data = await response.json()
    setCharacter(data.results);
    setInfo(data.info);
  } */


  const fetchCharacter = (urlApi) => {
    fetch(urlApi)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.results);
        setInfo(data.info);
      })

      .catch(err => setCharacter([]))
  };


  const anterior = () => {
    fetchCharacter(info.prev);
  }

  const siguiente = () => {
    fetchCharacter(info.next);
  }


  useEffect(() => {
    fetchCharacter(urlApi);
  }, [search])



  /* const searcher =(e) => {
    setSearch(e.target.value)
  } */


  return (

    <div>

      <Navbar />

      <Search search={search} setSearch={setSearch} />
      {/* <input value={search} onChange={searcher} type='text' placeholder='buscar' className='form-control w-25'>

      </input> */}

      <div className='container'>
        <Pages setPageNumber={setPageNumber} prev={info.prev} next={info.next} anterior={anterior} siguiente={siguiente} />
        
        <Character character={character} search={search} />

        <Pages setPageNumber={setPageNumber} prev={info.prev} next={info.next} anterior={anterior} siguiente={siguiente} />
      </div>

    </div>
  );
}

export default App;
