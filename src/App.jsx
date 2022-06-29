import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import PokedexMain from './Components/Pokedex/PokedexMain'
import PokemonId from './Components/Pokedex/PokedexId'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/pokedex' element={<PokedexMain />}></Route>
        <Route path='/pokedex:id' element={<PokemonId />}></Route>
      </Routes>
    </div>
  )
}

export default App
