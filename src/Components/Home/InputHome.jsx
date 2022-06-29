import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setNameGlobal } from '../../store/slices/userName.slice'

const InputHome = () => {

  const {handleSubmit, reset, register} =  useForm()

  const dispatch = useDispatch();

  const submit = data => {
    console.log(data)
    dispatch(setNameGlobal(data.userName))
    reset({
      userName:''
    })
  }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder='Ingresa tu nombre de entrenador' type="text" {...register('userName')} />
            <button>Go to Pokedex</button>
        </form>
    </div>
  )
}

export default InputHome