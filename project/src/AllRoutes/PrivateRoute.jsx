import { useSelector } from "react-redux";
import { useLocation,Navigate } from "react-router-dom";
export default function PrivateRoute({children}){
const data=useSelector((state)=>state.signupreducer)
const{isAuth}=data

const location=useLocation()
const logindata=useSelector((state)=>state.loginreducer)
const {token}=logindata
if(token==false){
    return <Navigate to="/login" state={location.pathname}  replace/>
}
return children
} 