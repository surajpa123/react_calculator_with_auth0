import React, { useState } from 'react'
import style from "../Components/Calcu.module.css"
import { cal_data } from './Redux/action';
import { useSelector, useDispatch} from 'react-redux';
import { store } from './Redux/store';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Calculator = () => {
    
    const [expr,setExpr] = useState(""
    );
    const dispatch = useDispatch()
    const store = useSelector((store)=>
    store.Data
    )

   

    console.log("Data",store)
 
//    for(var i = 0; i<store.length; i++){
//     var narr = []
//        store[i].split("+").map(Number)
//        narr.push(store[i])
//    }

//    console.log("new",narr)



const calcu = (val)=>{
    setExpr(expr.concat(val))
}
const calcu2 = (ex)=>{
   console.log(expr)
}
const result = ()=>{
    const res = eval(expr)
    setExpr(res)

    const data = {
        expression:expr,
        result:res,
        Date:new Date().toISOString().slice(0, 10) 
    }

    // dispatch(cal_data(data))
    axios.post(" http://localhost:8080/data",data).then(function(res){
        console.log("Posted",res.data)
    })
     
}
const clear = ()=>{
    setExpr('')
}
console.log("History",history)


  return (
      <>
      <h2>Result : {expr}</h2>
  {store.map((e)=>
  
  <p>{e}</p>
  )}
    <div className={style.main}>
    <div class="col"><button onClick={()=>{calcu(1)}} type="button" class="btn btn-primary">1</button></div>
    <div class="col"><button onClick={()=>{calcu(2)}} type="button" class="btn btn-primary">2</button></div>
    <div class="col"><button onClick={()=>{calcu(3)}} type="button" class="btn btn-primary">3</button></div>
    <div class="col"><button onClick={()=>{calcu(4)}} type="button" class="btn btn-primary">4</button></div>
    <div class="col"><button onClick={()=>{calcu(5)}} type="button" class="btn btn-primary">5</button></div>
    <div class="col"><button onClick={()=>{calcu(6)}} type="button" class="btn btn-primary">6</button></div>
    <div class="col"><button onClick={()=>{calcu(7)}} type="button" class="btn btn-primary">7</button></div>
    <div class="col"><button onClick={()=>{calcu(8)}} type="button" class="btn btn-primary">8</button></div>
    <div class="col"><button onClick={()=>{calcu(9)}} type="button" class="btn btn-primary">9</button></div>
    <div class="col"><button onClick={()=>{calcu(0)}} type="button" class="btn btn-primary">0</button></div>
    <div class="col"><button onClick={()=>{calcu("+")}} type="button" class="btn btn-primary">+</button></div>
    <div class="col"><button onClick={()=>{calcu("-")}} type="button" class="btn btn-primary">-</button></div>
    <div class="col"><button onClick={()=>{calcu("*")}} type="button" class="btn btn-primary">*</button></div>
    <div class="col"><button onClick={()=>{calcu("/")}} type="button" class="btn btn-primary">/</button></div>
    <div class="col"><button onClick={result} type="button" class="btn btn-primary">=</button></div>
    </div>
    <div class="col"><button onClick={clear} type="button" class="btn btn-primary">Delete / Clear</button></div>
<br />
    <Link to={"/history"}>Check Calculation History</Link>
    </>
  )
}

export default Calculator