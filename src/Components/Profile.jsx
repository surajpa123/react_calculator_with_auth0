import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from './Redux/action'
import { store } from './Redux/store'



const Profile = () => {
    const dispatch = useDispatch()
    const {user} = useAuth0()




    const authenticate = useSelector((store)=>
    store.Auhthenticate
    )
const data = user
console.log(data)


if(user != undefined){
    dispatch(auth(true))
}else{
    dispatch(auth(false))
}
  return (
    <div >
     
        {
            data? <> <img style={{borderRadius:"100px",height:"50px"}} src={data.picture} alt="" /> <br /> <p>{data.name}</p>  </>:
            <p>Loading</p>
        }

        
        </div>
  )
}

export default Profile