import { handleback, handleback2 } from "./ActionType"

const initialstate={
    backing:false
}
export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case handleback:{
            return {...state,backing:!state.backing}
        }
        case handleback2:{
            return {...state,backing:true}
        }
        default:{
            return state
        }
    }
}