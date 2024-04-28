import { useState } from 'react'
import './App.css'
import SignIn from './Component/Auth/SignIn'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Component/Auth/SignUp'
import Header from './Component/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/NavBar' element={<Header/>}/>

    </Routes>
  
    
    </>
  )
}

export default App
