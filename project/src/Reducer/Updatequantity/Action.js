import { updatequantityfail, updatequantityreq, updatequantitysucc } from "./ActionTypes"

import axios from "axios"
export const updatequantityrequest=()=>{
    return {type:updatequantityreq}
}
export const updatequantitysuccess=()=>{
    return {type:updatequantitysucc}
}
export const updatequantityfailure=()=>{
    return {type:updatequantityfail}
}

export const updatedata=(value,id,token)=>async(dispatch)=>{
    let obj={quantity:value}
    dispatch(updatequantityrequest())
// const usertoken=localStorage.getItem("usertoken")
// console.log(usertoken)
// console.log(value,id)

   try{

   await axios.patch(`${process.env.REACT_APP_Url}/userdata/userproduct/${id}`,obj,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    
    }).then((res)=>{
        // console.log(res)
        
        dispatch(updatequantitysuccess())

    }).catch((err)=>{
        // console.log(err)
        dispatch(updatequantityfailure())

    })}catch(err){
        console.log(err)
    }


}