import React from 'react'


const Forms = ({setPokeSearch, typeList, setTypeFilter}) => {
    
    const changeForm = e => {
        setPokeSearch(e.target.value)
    }

    const changeValue = e =>{
        setTypeFilter(e.target.value)
    }
  return (
    <div className='container-input search-input'>
        <form className='form-home'>
            <input 
            placeholder='Look for your Pokemon' 
            type="text"
            onChange={changeForm}
            />
        </form>
        <select className='select' onChange={changeValue}>
            <option value='All Pokemons'>All Pokemons</option>
            {
                typeList?.map(type => (
                    <option key={type.name} value={type.name}>{type.name}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Forms