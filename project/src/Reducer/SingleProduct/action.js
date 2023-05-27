import axios from "axios";
import { singleproductfail, singleproductreq, singleproductsucc } from "./ActionTypes";
export const singleproductrequest=()=>{
    return {type:singleproductreq}
}
export const singleproductsuccess=(payload)=>{
    return {type:singleproductsucc,payload}
}
export const singleproductfailure=()=>{
    return {type:singleproductfail}
}

const url=process.env.REACT_APP_Url
export const singleproduct=(id)=>async(dispatch)=>{
    dispatch(singleproductrequest())
    await axios.get(`${url}/products/single/${id}`).then((res)=>{

        dispatch(singleproductsuccess(res.data))
    }).catch((err)=>{
        dispatch(singleproductfailure())
    })
}