import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Wine from './components/wineForm'
import SignUp from './components/signUp'
import Login from './components/Login'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Wine/>}/> 
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>         
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App