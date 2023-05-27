import { signupreq, signupsucc, signupfail } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    isAuth:false,
    status:""
}
export const reducer=(state=initialdata,action)=>{
    const{type,payload}=action
    switch(type){
        case signupreq:{
return {...state,isLoading:true,isError:false,isAuth:false,status:""}
        }
        case signupsucc:{
            return {...state,isLoading:false,isError:false,isAuth:true,status:payload}

        }
        case signupfail:{
            return {...state,isLoading:false,isError:true,isAuth:false,status:payload}


        }
        default:{
            return state
        }
    }
}