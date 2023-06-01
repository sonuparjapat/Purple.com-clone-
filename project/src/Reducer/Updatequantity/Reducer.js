import { updatequantityfail, updatequantityreq, updatequantitysucc } from "./ActionTypes"

const initialdata={
isLoading:false,
isError:false

}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case updatequantityreq:{
            return {...state,isLoading:true,isError:false}
        }
        case updatequantitysucc:{
            return {...state,isLoading:false,isError:false}
        }
        case updatequantityfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }

}