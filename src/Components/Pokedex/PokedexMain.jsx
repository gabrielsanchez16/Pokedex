import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'

const Pokedex = () => {

  const userName = useSelector(state => state.userName)

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=00&limit=05'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log('err'))

  }, [])
  
  console.log(pokemons)
  return (
    <div>
        <h1>Pokedex</h1>
        <h2>Hola {userName} Bienvenido a la Pokedex</h2>
        {
          pokemons?.map(pokemon => (
            <PokemonCard
            key={pokemon.url}
            url={pokemon.url}
            />
          ))
        }
    </div>
  )
}

export default Pokedex