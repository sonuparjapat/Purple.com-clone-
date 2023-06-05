import { store } from "./ActionTypes"

const initialstate={
    storeddata:{}
}

export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case store:{
            return {...state,storeddata:payload}
        }
        default:{
            return state
        }
    }
}