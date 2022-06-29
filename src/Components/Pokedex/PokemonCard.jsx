import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState()

    useEffect(() => {

        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log('err'))

    }, [])


    return (
        <article>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="Pokemon-image" />
            <h3>{pokemon?.name}</h3>
            <p>{pokemon?.types[0].type.name}</p>
            <p>Type</p>
            <ul>
                <li>{pokemon?.stats[0].stat.name}: {pokemon?.stats[0].base_stat}</li>
                <li>{pokemon?.stats[1].stat.name}: {pokemon?.stats[1].base_stat}</li>
                <li>{pokemon?.stats[2].stat.name}: {pokemon?.stats[2].base_stat}</li>
            </ul>
            <ul>
                <li>{pokemon?.stats[3].stat.name}: {pokemon?.stats[3].base_stat}</li>
                <li>{pokemon?.stats[4].stat.name}: {pokemon?.stats[4].base_stat}</li>
                <li>{pokemon?.stats[5].stat.name}: {pokemon?.stats[5].base_stat}</li>
            </ul>
        </article>
    )
}

export default PokemonCard