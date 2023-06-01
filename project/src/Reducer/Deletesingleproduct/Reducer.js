import { deletefail, deletereq } from "./ActionTypes"

const initiialdata={
    isLoading:false,
    isError:false
}
export const reducer=(state=initiialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case deletereq:{
            return {...state,isLoading:true,isError:false}
        }
        case deletefail:{
            return {...state,isLoading:false,isError:false}
        }
        case deletefail:{
            return {...state,isLoading:false,isError:false}
        }
        default:{
            return state
        }
    }
}