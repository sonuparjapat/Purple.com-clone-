import { checkedmarkmethod } from "./ActionType"

const initialstate={
    checkedmethodvalue:false
}

export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
case checkedmarkmethod:{
    return {...state,checkedmethodvalue:!state.checkedvalue}
}
default:{
    return state
}
    }
}