import { useEffect, useReducer, useState } from "react";
import axios from "axios"
import { Select,Box, SimpleGrid } from "@chakra-ui/react";
import Primerisloading from "./Primerisloading";
import { Grid, GridItem } from "@chakra-ui/react";
import PrimermainProduct from "./Primermainproduct";
const initdata={
    products:[],
    isLoading:false,
    isError:false
}

const reducer=(state,action)=>{
    const{type,payload}=action
    switch(type){
        case "FETCHING":{
            state={...state,products:[],isLoading:true,isError:false}
            return state
        }
        case "FETCH_SUCCESS":{
            state={...state,products:payload,isLoading:false,isError:false}
            return state
        }
        case "FETCH_FAILED":{
            state={...state,products:[],isLoading:false,isError:true}
            return state
        }
        default:{
            return state
        }
    }
}



export default function PrimerProduct(){
// const [products,setProducts]=useState([])
const [state,dispatch]=useReducer(reducer,initdata)
const{isLoading,isError,products}=state
const [page,setPage]=useState(1)
const[total,setTotal]=useState(0)
const[price,setPrice]=useState("")
const[rating,setRaing]=useState("")
const[brand,setBrand]=useState("")
console.log(products)
useEffect(()=>{
    getdata(page)
},[page])
const getdata=(page)=>{
    dispatch({type:"FETCHING"})
   axios.get(`https://cute-red-fossa-slip.cyclic.app/PrimerProducts?_limit=4&_page=${page}`).then((res)=>{
 setTotal(res.headers.get("x-total-count"))
   dispatch({type:"FETCH_SUCCESS",payload:res.data})
 }).catch((error)=>{dispatch({type:"FETCH_FAILED"})})
}
const handlepage=(x)=>{
    getdata(x)
}
if(isLoading){
    return (
  <Primerisloading/>
    )
}
return (
<>
<Box mt="60px">
    <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>

<Select onChange={(e)=>setBrand(e.target.value)} placeholder='Brands All'>
  <option value='NY Bae'>NY Bae</option>
  <option value='Matte'>Matte</option>
  <option value='Swiss Beauty'>Swiss Beauty</option>
  <option value='INSIGHT'>INSIGHT</option>
  <option value='M.A.C'>M.A.C</option>
  <option value='Colorbar'>Colorbar</option>
  <option value='Sugar'>Sugar</option>
  <option value='Blue Heaven'>Blue Heaven</option>
  <option value='Lakme'>Lakme</option>
  <option value='Cuffs'>Cuffs</option>
  <option value='Stay Quirky'>Stay Quirky</option>
  <option value="L'Oreal">L'Oreal</option>
</Select>
<Select onChange={(e)=>setRaing(e.target.value)} placeholder='Rating'>

  <option value='rating_gte=3&rating_lte=4'>3-4</option>
  <option value='rating_gte=4&rating_lte=5'>4-5</option>
</Select>
<Select onChange={(e)=>setPrice(e.target.value)} placeholder='Price'>
  <option value='asc'>ascending order</option>
  <option value='desc'>descending order</option>

</Select>

</SimpleGrid>
</Box>
<PrimermainProduct total={total} handlepage={handlepage} products={products}/>
 
    


</>

)

}