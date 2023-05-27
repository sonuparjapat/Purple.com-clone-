import { Routes,Route } from "react-router-dom"
import Signup from "../LoginLogout/Signup"
import WithSubnavigation from "../Navbar"
import Login from "../LoginLogout/Login"
import Primer from "../Makeup/Primer"
import Main from "../HomePagework/Main"
import SinglePrimer from "../Makeup/SinglePrimer"
import NotFound from "../HomePagework/Notfound"
import Cartpage from "../Makeup/Cartpage"
export default function AllRoutes(){
    return (
        <>
<Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/primer" element={<Primer/>}></Route>
    <Route path="/cart" element={<Cartpage/>}></Route>
    <Route path="/primer/:id" element={<SinglePrimer/>}></Route>
   <Route path="*" element={<NotFound/>}></Route>
</Routes>
 </>
    )
}