import { addtocardreq, addtocartfail, addtocartsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case addtocardreq:{
            return {...state,isLoading:true,isError:false}
        }
        case addtocartsucc:{
            return {...state,isLoading:false,isError:false}
        }
        case addtocartfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}