import { createContext, useState } from "react";
export const Authcontext=createContext()
export default function AuthProvider({children}){
    const[username,setUsername]=useState("")
    const[ourinput,setOurinput]=useState("")
    const arrangeusername=(x)=>{
        console.log(x)
setUsername(x)
    }
    const removeusername=()=>{
        setUsername("")
    }
    const inputvalue=(x)=>{
        setOurinput(x)
    }
    return (
<Authcontext.Provider value={{username,arrangeusername,removeusername,inputvalue,ourinput}}>
    {children}
</Authcontext.Provider>



    )
}