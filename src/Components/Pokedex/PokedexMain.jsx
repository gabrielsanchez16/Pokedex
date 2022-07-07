import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'
import image from '../../img/image 12.png'
import Pagination from './Pagination'
import Forms from './Forms'
import imageGa from '../../img/gabriel.jpeg'
import imageMi from '../../img/miguel.jpeg'
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Pokedex = () => {

  const userName = useSelector(state => state.userName)

  const [pokemons, setPokemons] = useState()
  const [loading, setLoading] = useState(true)
  const [pokeSearch, setPokeSearch] = useState()
  const [filterPokemons, setFilterPokemons] = useState()
  const [typeList, setTypeList] = useState()
  const [typeFilter, setTypeFilter] = useState('All Pokemons')
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    setFilterPokemons(pokemons?.filter(e => e.name.includes(pokeSearch.toLowerCase())))
  }, [pokeSearch])

  useEffect(() => {
    setLoading(false)
    if (typeFilter === 'All Pokemons') {
      const URL = "https://pokeapi.co/api/v2/pokemon?offset=00&limit=1154"
      axios.get(URL)
        .then(res => { setPokemons(res.data.results) })
        .catch(err => console.log('err'))
    } else {
      const type = `https://pokeapi.co/api/v2/type/${typeFilter}/`
      axios.get(type)
        .then(res => {
          const array = res.data.pokemon.map(e => e.pokemon)
          setPokemons(array)
        })
        .catch(err => console.log('er'))
    }
  }, [typeFilter])

  useEffect(() => {
    const TYPEURL = 'https://pokeapi.co/api/v2/type/'
    axios.get(TYPEURL)
      .then(res => setTypeList(res.data.results))

  }, [])

  let arrayPokemons = []
  const pokemonsPerPage = 6
  if (pokemons?.length < pokemonsPerPage) {
    arrayPokemons.push(...pokemons?.map(e => e))
  } else {
    const lastPokemon = currentPage * pokemonsPerPage
    arrayPokemons = pokemons?.slice(lastPokemon - pokemonsPerPage, lastPokemon)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(pokemons?.length / pokemonsPerPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++)
      arrayPages.push(i)
  } else {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++)
      arrayPages.push(i)
  }


  if (loading) return "Loading..."


  return (
    <>
      <header>
        <div className='container-div'>
          <div className='flag-red'></div>
          <div className='flag-black'></div>
          <img src={image} alt="" />
          <div className='circle-black'>
            <div className='circle-white'>
              <div className='circle-black2'>
                <div className='circle-black-mate'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <h2 className='welcome'>Welcome <span className='name-user'>{userName}</span> Welcome to the Pokedex, here you can find your favorite Pokemon</h2>
        <Forms
          setTypeFilter={setTypeFilter}
          typeList={typeList}
          setPokeSearch={setPokeSearch}
        />
        <Pagination
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />
        <div className='container-cards'>
          {
            filterPokemons ?
              filterPokemons?.map(pokemon => (
                <PokemonCard
                  key={pokemon.url}
                  url={pokemon.url}
                />
              ))
              :
              arrayPokemons?.map(pokemon => (
                <PokemonCard
                  key={pokemon.url}
                  url={pokemon.url}
                />
              ))
          }
        </div>
        <Pagination
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />
      
      </div>
      <div className='footer-colaborators'>
        <h2>Colaborators</h2>
        <div className='container-colaborators'>
            <article>
              
              <h3>Gabriel Sanchez</h3>
              <ul>
                <li><a href="https://www.linkedin.com/in/gabriel-sanchez-717222206/"><BsLinkedin/></a></li>
                <li><a href="https://github.com/gabrielsanchez16"><BsGithub/></a></li>
              </ul>
            </article>
            <article>
              
              <h3>Miguel Chavez</h3>
              <ul>
                <li><a href=""><BsLinkedin/></a></li>
                <li><a href=""><BsGithub/></a></li>
              </ul>
            </article>
        </div>
            
          </div>
    </>

  )
}

export default Pokedex