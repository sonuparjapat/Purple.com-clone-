import { Routes,Route } from "react-router-dom"
import Signup from "../LoginLogout/Signup"
import WithSubnavigation from "../Navbar"
import Login from "../LoginLogout/Login"
import Primer from "../Makeup/Primer"
import Main from "../HomePagework/Main"
export default function AllRoutes(){
    return (
        <>
<Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/primer" element={<Primer/>}></Route>
   
</Routes>
 </>
    )
}