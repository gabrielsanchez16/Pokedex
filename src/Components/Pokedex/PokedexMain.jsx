import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'
import image from '../../img/image 12.png'
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
        <h2 className='welcome'>Hola <span className='name-user'>{userName}</span> Bienvenido a la Pokedex, aqui podras encontrar tu pokemon favorito</h2>
        <div className='container-cards'>
          {
          pokemons?.map(pokemon => (
            <PokemonCard
            key={pokemon.url}
            url={pokemon.url}
            />
          ))
          }
        </div>
        
    </div>
    </>
    
  )
}

export default Pokedex