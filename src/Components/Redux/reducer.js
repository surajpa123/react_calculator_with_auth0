
import { CAL_DATA ,AUTH} from "./action";

const initState = {
    Data:[],
    Auhthenticate:false
}
export const reducer = (store = initState,{type,payload})=>{
    console.log(store)
    switch(type){
        case CAL_DATA:
            return({...store,Data:[...store.Data,...payload]})
            case AUTH:
                return ({...store,Auhthenticate:payload})
            default:
                return store
    }
}