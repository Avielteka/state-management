import { UP_ACTION } from "./store/actions/counter-type"
import { DOWN_ACTION } from "./store/actions/counter-type"
import { REST_ACTION} from "./store/actions/counter-type"
import { UPDATE_COUNTER } from "./store/actions/counter-type"

export const COUNTERUP = ()=>{
    return {type:UP_ACTION};
}
export  const downAction = ()=>{
    return {type: DOWN_ACTION }
}
export  const resetAction = ()=>{
    return {type: REST_ACTION}
}
export  const UPDATE = (number)=>{
    return {type:UPDATE_COUNTER,payload: number}
}
