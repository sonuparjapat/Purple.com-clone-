import { cartdatafail, cartdatareq, cartdatasucc } from "./ActionTypes"




const initiialdata={
    data:[],
    "sum":"",
    "sumafterdiscount":"",
    "savings":"",
    isLoading:false,
    isError:false,

}

export const reducer=(state=initiialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case cartdatareq:{
            return {...state,isLoading:true,isError:false,data:[],sum:"",sumafterdiscount:"",savings:""}
        }
        case cartdatasucc:{
            return {...state,isLoading:false,isError:false,data:payload.data,sum:payload.sum,sumafterdiscount:payload.totalafterdiscount,savings:payload.savings}
        }
        case cartdatafail:{
            return {...state,isLoading:false,isError:true,data:[],sum:"",sumafterdiscount:"",savings:""}
        }
        default:{
            return state
        }
    }
}