import { productsreq,productsucc,productfail } from "./actionType"

let initialdata={
    products:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case productsreq:{
            return {...state,isLoading:true,isError:false,products:[]}
        }
        case productsucc:{
        return {...state,isLoading:false,isError:false,products:payload}
        }
        case productfail:{
            return {...state,isLoading:false,isError:true,products:[]}
        }
        default:{
            return state
        }
    }
}