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
        <article className='poke-card'>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="Pokemon-image" />
            <div className='container-info'>
                <h2>{pokemon?.name}</h2>
                <h3>{pokemon?.types[0].type.name}</h3>
                <p>Tipo</p>
                <hr />
                <div  className='container-ul'>
                    <ul>
                        <li><b>{pokemon?.stats[0].stat.name}:</b> <span>{pokemon?.stats[0].base_stat}</span></li>
                        <li><b>{pokemon?.stats[1].stat.name}:</b> <span>{pokemon?.stats[1].base_stat}</span></li>
                        <li><b>{pokemon?.stats[2].stat.name}:</b> <span>{pokemon?.stats[2].base_stat}</span></li>
                    </ul>
                
                    <ul>
                        <li><b>{pokemon?.stats[3].stat.name}:</b> <span>{pokemon?.stats[3].base_stat}</span></li>
                        <li><b>{pokemon?.stats[4].stat.name}:</b> <span>{pokemon?.stats[4].base_stat}</span></li>
                        <li><b>{pokemon?.stats[5].stat.name}:</b> <span>{pokemon?.stats[5].base_stat}</span></li>
                    </ul>
                </div>
            </div>
            
            
        </article>
    )
}

export default PokemonCard