import { signinfail, signinreq, signinsucc } from "./actionTypes"




const initialdata={
    data:[],
    isLoading:false,
    isError:false,
    "token":"",
    "username":""
    
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case signinreq:{
            return {...state,isLoading:true,isError:false,data:[],token:"",username:""}
        }
        case signinsucc:{
            return {...state,isLoading:false,isError:false,data:payload,token:payload.token,username:payload.username}
        }
        case signinfail:{
            return {...state,isLoading:false,isError:true,token:"",data:[],username:""}
        }
        default:{
            return state
        }
    }
}