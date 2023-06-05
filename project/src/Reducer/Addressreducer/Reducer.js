import { address } from "./ActionTypes"

const initialdata={
    userdata:[]
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case address:{
       
            return {...state,userdata:payload}
        }
        default:{
            return state
        }
    }
}