import React from 'react'
import image from '../../img/image 12.png'
import image2 from '../../img/giphy.gif'

const Error = () => {
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
    <div className='text-error'>
      <h1>Hola trainer para poder avanzar debes colocar tu nombre</h1>
      <img src={image2} alt="" />
    </div>
    </>
  )
}

export default Error