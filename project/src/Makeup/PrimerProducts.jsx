import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import { Select,Box, SimpleGrid } from "@chakra-ui/react";
import Primerisloading from "./Primerisloading";
import { Grid, GridItem } from "@chakra-ui/react";
import PrimermainProduct from "./Primermainproduct";
import { useLocation } from "react-router-dom";
import { getprimerdata } from "../Reducer/Productsprimer/action";
import { useSearchParams } from "react-router-dom";
export default function PrimerProduct(){
const location=useLocation()
const dispatch=useDispatch()
const data=useSelector((state)=>state.primerproduct)
const [searchParams]=useSearchParams()
// console.log(searchParams.getAll("product-brand"))
const {isLoading,isError,products}=data
// console.log(products)
// console.log(products)
const obj={
  params: {
    "productbrand":searchParams.getAll("productbrand"),
    "range":searchParams.getAll("range"),
    "discountrange":searchParams.getAll("discountrange")
  },
}
useEffect(()=>{
dispatch(getprimerdata(obj))
},[location.search])

// const handlepage=(x)=>{
//     getdata(x)
// }
if(isLoading){
    return (
  <Primerisloading/>
    )
}
return (
<>
<Box>
<Box mt="60px">
    <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>

</SimpleGrid>
</Box>
<PrimermainProduct   products={products}/></Box>
 
    


</>

)

}