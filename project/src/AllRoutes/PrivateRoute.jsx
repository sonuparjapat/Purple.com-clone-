import { useSelector } from "react-redux";
import { useLocation,Navigate, useNavigate } from "react-router-dom";
export default function PrivateRoute(children){
const data=useSelector((state)=>state.signupreducer)
const{isAuth}=data
const navigate=useNavigate()
let token=localStorage.getItem("usertoken")||""
if(token==false){
    return <Navigate to="/login" state={location.pathname} replace/>
}
return children
} 