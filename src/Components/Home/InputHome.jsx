import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/userName.slice'

const InputHome = ({setIsLogged}) => {

  const {handleSubmit, reset, register} =  useForm()

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const submit = data => {
    dispatch(setNameGlobal(data.userName))
    if (data.userName.trim() !== '') {
      setIsLogged(true)
      navigate('/pokedex')
    }else {
      navigate('/error')
    }
    
  }

  return (
    <div className='container-input'>
        <form className='form-home' onSubmit={handleSubmit(submit)}>
            <input placeholder='Ingresa tu nombre de entrenador' type="text" {...register('userName')} />
            <button>Go to Pokedex</button>
        </form>
    </div>
  )
}

export default InputHome