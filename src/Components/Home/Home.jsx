import React from 'react'
import InputHome from './InputHome'
import image from '../../img/Pokedex.png'
import gif from '../../img/gifpokebola.gif'


const Home = ({setIsLogged}) => {
  return (
  <>
  <div className='Home'>
    <div className='container-home'>
        <img className='pokedex' src={image} alt="" />
        <img className='gif' src={gif} alt="" />
        <h1>¡Bienvenido Entrenador!</h1>
        <p>Para poder comenzar, dame tu nombre</p>
        <InputHome
        setIsLogged={setIsLogged}/>
    </div>
    <footer>
      <div className='container-div'>
        <div className='flag-red'></div>
        <div className='flag-black'></div>
        <div className='circle-black'>
          <div className='circle-white'>
            <div className='circle-black2'>
              <div className='circle-black-mate'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  

    
  </>
    
    
    
  )
}

export default Home