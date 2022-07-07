import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonId = () => {
  const { id } = useParams()

  const [soloPokemon, setSoloPokemon] = useState()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => setSoloPokemon(res.data.results))
        .catch((err) => console.log('err'))
  
  }, [])
  
  return (
    <div>
        Hola {soloPokemon.name}
    </div>
  )
}

export default PokemonId