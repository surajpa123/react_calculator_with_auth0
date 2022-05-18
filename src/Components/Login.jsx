import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { auth } from './Redux/action'


const Login = () => {

    const dispatch = useDispatch()
const {loginWithRedirect} = useAuth0()
const {user} = useAuth0()



if(user != undefined){
    dispatch(auth(true))
}



  return (

    <>
    <div style={{margin:"10%", height:"300px"}}>
    <h3>Kindly Log In to access the calculator</h3>
    <button type="button" class="btn btn-success" onClick={()=>{loginWithRedirect()}}>Login</button>

    </div>
    </>
  )
}

export default Login