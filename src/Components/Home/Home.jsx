import React from 'react'
import InputHome from './InputHome'

const Home = ({setIsLogged}) => {
  return (
    <div>
        <h1>Pokedex</h1>
        <h2>Bienvenido Entrenador </h2>
        <InputHome
        setIsLogged={setIsLogged}
        />
    </div>
  )
}

export default Home