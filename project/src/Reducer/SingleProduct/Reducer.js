import { singleproductfail, singleproductreq, singleproductsucc } from "./ActionTypes"



const initialdata={
    isLoading:false,
    isError:false,
    data:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case singleproductreq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case singleproductsucc:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case singleproductfail:{
            return {...state,isLoading:false,isError:true,data:[]}
        }
        default:{
            return state
        }
    }
}