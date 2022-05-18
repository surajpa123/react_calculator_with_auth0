import React, { useState } from 'react'

import axios from 'axios'

const History = () => {

    const [data,setdata] = useState()


    React.useEffect(()=>{
        getData()
    },[])


    const getData = ()=>{
        axios.get("http://localhost:8080/data").then(function(res){
            console.log("his",res.data)
            setdata(res.data)
        })
    }
  
  return (
    <div>
        <h1>History</h1>

        {data?.map((e)=>
        <p>{e.expression} =  {e.result} Date : {e.Date} </p>
      
        )}

    </div>
  )
}

export default History