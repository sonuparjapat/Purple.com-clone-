import { checkedmark } from "./ActionTypes"

const initialstate={
    checkedvalue:false
}

export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
case checkedmark:{
    return {...state,checkedvalue:!state.checkedvalue}
}
default:{
    return state
}
    }
}