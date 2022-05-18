import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Calculator from './Components/Calculator'
import {Routes,Route} from "react-router-dom"
import History from './Components/History'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Profile from './Components/Profile'
import {useSelector} from 'react-redux'
function App() {
  
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  const authenticate = useSelector((store)=>
    store.Auhthenticate
    )
    console.log(authenticate)

  return (
    <div className="App">

    {authenticate? <>
      <Profile/>
      
      <Routes>
        <Route path='/' element = {<Calculator/>}></Route>
        <Route path='/history' element = {<History/>}></Route>
      </Routes>
     <br />
      <br />
      <br />
      <Logout/>
     </>: <><Login/>   </>}

     

     

     
      
      

     
 

    </div>
  )
}

export default App
