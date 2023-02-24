import { createContext, useState } from "react";
export const Authcontext=createContext()
export default function AuthProvider({children}){
    const[username,setUsername]=useState("")
    const arrangeusername=(x)=>{
        console.log(x)
setUsername(x)
    }
    const removeusername=()=>{
        setUsername("")
    }
    return (
<Authcontext.Provider value={{username,arrangeusername,removeusername}}>
    {children}
</Authcontext.Provider>



    )
}