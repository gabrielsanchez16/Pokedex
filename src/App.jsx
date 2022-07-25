import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import PokedexMain from './Components/Pokedex/PokedexMain'
import PokemonId from './Components/Pokedex/PokedexId'
import { useState } from 'react'
import Private from './Components/PrivateRoutes/Private'
import Error from './Components/PrivateRoutes/Error'


function App() {

  const [isLogged, setIsLogged] = useState  (false)
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setIsLogged={setIsLogged} />}/>
        <Route path='/error' element={<Error />}/>

        <Route element={<Private isLogged={isLogged} />}></Route>
        <Route path='/pokedex' element={<PokedexMain />}></Route>
        <Route path='/pokedexid' element={<PokemonId />}></Route>
      </Routes>
    </div>
  )
}

export default App
