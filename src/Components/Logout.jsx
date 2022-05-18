import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { auth } from './Redux/action'

const Logout = () => {
    const dispatch = useDispatch()
const {logout} = useAuth0()
console.log(logout)

  return (
    <button type="button" class="btn btn-danger"  onClick={()=>{logout()}}>
       Logout 
    </button>
  )
}

export default Logout