import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element=''></Route>
      </Routes>
    </div>
  )
}

export default App
