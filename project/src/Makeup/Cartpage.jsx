import React, { useState } from 'react'
import WithSubnavigation from './Navbar'
import LargeWithLogoCentered from '../HomePagework/Footer'
import {Box,Heading,Image,Button,Spacer,space, Spinner, useToast, SelectField} from "@chakra-ui/react"

import { Link } from 'react-router-dom'

import { AiOutlineDelete,AiFillLock } from "react-icons/ai";
import {TfiFaceSad} from "react-icons/tfi"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usercarddata } from '../Reducer/CartReducer/Action'
import { deletedata, deletefailure, deletesuccess } from '../Reducer/Deletesingleproduct/Action'
import { updatedata } from '../Reducer/Updatequantity/Action'

const theme={
  color:"rgb(44,65,76)",
  lineHeight:"23px",
  weight:400,
  "size":"",
  fontFamily:"AqleemaM"
}
const data1={
  "ratings": "",
  "ratingcount": "",
  "type": "",
  "img": "",
  "productbrand": "",
  "product-price": "",
  "product-sizeButton": "",
  "price": "",
  "product-discountPercentage":0,
  "id": 0,
  "range": "",
  "discountrange": "",
  "quantity": 1,
}
export default function Cartpage() {
const [cartdata,setCartdata]=useState(data1)
const [paymentmethod,setPaymentmethod]=useState(false)
const [online,setOnline]=useState(false)

const [shippingcharge,setShippingcharges]=useState(50)
const [state,setState]=useState(false)
const dispatch=useDispatch()
const cart=useSelector((state)=>state.cartdatareducer)
const logindata=useSelector((state)=>state.loginreducer)
const {username,token}=logindata
useEffect(()=>{
dispatch(usercarddata(token))
},[state])
const {isLoading,isError,data,sum,sumafterdiscount,savings}=cart

// useEffect(()=>{
//   setCartdata(data)
// },[])
const toast=useToast()
const handleclick=(id)=>{
dispatch(deletedata(id,token&&token)).then((res)=>{
  // console.log(res)

  dispatch(deletesuccess())
  toast({description:"Item Removed","status":"success","position":"top"})
  setState(!state)
 
}).catch((err)=>{
  dispatch(deletefailure())

})
}
// >>>>>>>>>>>>>>>>>>>>>>>>handlingquatityhere>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const handlequantity=(e,id)=>{
let value=e.target.value
// console.log(value,id)
dispatch(updatedata(value,id,token&&token))
setTimeout(()=>{
  setState(!state)
},1000)


}
// console.log(savings)

 
  return (
   <>
<WithSubnavigation/>
<Box width="80%" margin="auto" mt="100px" display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} gap="20px">
<Box>
<Box height="60px" width="100%"  bg="#fbeef6"><Box   width="90%"  margin="auto"   display="flex" justifyContent={"space-between"} ><Box><Heading size="20px" mt="15px" textAlign={"left"} fontWeight={"light"} lineHeight={"22px"} color="rgb(44,65,76)" fontFamily={"AqlemmaM"} >My Cart</Heading></Box>
<Box>
    <Link to="/primer" ><Heading mt="15px" color="#68d391" size="20px" fontWeight={"light"} lineHeight={"22px"} fontFamily={"AqlemmaM"}>{"Show More "}</Heading></Link>
</Box></Box></Box>




<Box mt="60px" height={"480px"} overflow={"scroll"}  top={1} width="100%" >
  {isLoading?<Spinner/>:
  <>
{typeof data!=="undefined"&&data.length>=1?
data.map((item,index)=>
<Box width="95%" key={index} borderRadius={"10px"} shadow={" rgba(149, 157, 165, 0.2) 0px 8px 24px"}  display="flex" justifyContent={"space-around"} marginTop="40px" >



<Box width={"27%"} >

<Image transition={"transform 1s ease "}
_hover={{transform:"scale(0.8)"}} borderRadius={"10px"} width="90%" height={"90%"}  margin="auto" mt="7px" shadow={"rgba(230, 69, 69, 0.35) 0px 5px 15px"} src={item.img}/>
</Box>

<Box >
<p style={{"marginTop":"40px","color":`${theme.color}`,weight:`${theme.weight}`,lineHeight:`${theme.lineHeight}`,size:`${theme.size}`,fontFamily:`${theme.fontFamily}`}}  >{item.type}</p>

<Box w="70%" display={"flex"} mt="30px" gap="5px"  >
<Box><p style={{"marginTop":"40px","color":`${theme.color}`,weight:`${theme.weight}`,lineHeight:`${theme.lineHeight}`,size:`${theme.size}`,fontFamily:`${theme.fontFamily}`,display:"inline"}} > Qty.</p></Box>
<Box>
<SelectField onChange={(e)=>handlequantity(e,item._id,token)}  value={item.quantity} width="100%" >

  <option value={1}>1</option>
  <option value={2}>2</option>
  <option value={3}>3</option>
  <option value={4}>4</option>
  <option value={5}>5</option>
</SelectField></Box></Box>
<hr></hr>

</Box>

<Box mt="40px">
  <Box><p style={{"color":`${theme.color}`,weight:`${theme.weight}`,lineHeight:`${theme.lineHeight}`,size:`${theme.size}`,fontFamily:`${theme.fontFamily}`}} >Rs. {Math.ceil(Number(item["product-price"])*Number(item.quantity)-(Number(item["product-price"])*Number(item.quantity))*(Number(item["product-discountPercentage"])/100))}</p>
  <strike  style={{"color":`${theme.color}`,weight:`${theme.weight}`,lineHeight:`${theme.lineHeight}`,size:`${theme.size}`,fontFamily:`${theme.fontFamily}`}} ><space>{item["product-price"]}</space></strike><span style={{"color":"#eb7e8c",weight:`${theme.weight}`,lineHeight:`${theme.lineHeight}`,size:`${theme.size}`,fontFamily:`${theme.fontFamily}`}} > {item["product-discountPercentage"]}%off</span></Box>
  <Button onClick={()=>handleclick(item._id)} mt="5px" shadow={"rgba(230, 69, 69, 0.35) 0px 5px 15px"} color="red.300"><AiOutlineDelete /></Button>
</Box>
</Box>):
<Box>
<Image width="100%" mt="100px" src="https://bakestudio.in/assets/images/cart/empty-cart.gif"/>
<h3 style={{"color":`${theme.color}`,weight:`${theme.weight}`,lineHeight:`${theme.lineHeight}`,size:`${theme.size}`,fontFamily:`${theme.fontFamily}`}} >!!Cart is Empty</h3>
</Box>
  }
</>
}






</Box>
</Box>

<Box  height={"600px"} >
<Box width="70%"  margin="auto">
  <Box border={`1px solid ${theme.color}`} w="100%" margin={"auto"}>
<Box display="flex" width="50%" margin="auto" justifyContent={"space-around"}>
  <Box>
  <AiFillLock color="#991d86"/>
  </Box>
  <Box>
    <span style={theme}>100% Safe Payments</span>
    <p style={{color:`${theme.color}`,size:"13px",weight:`${theme.weight}`,lineHeight:"19px"}}>Genuine products | Easy returns</p>
  </Box>

 
</Box>

  </Box>
  <hr style={{"marginTop":"50px"}}></hr>
  <Heading fontWeight={"light"} textAlign={"left"} theme >Product Details :-</Heading>
  <Box >
    <Box display="flex" w="100%" justifyContent={"space-between"} mt="10px">
<Box>
<span style={theme}>Totle MRP</span>
</Box>
<Box>
<span style={theme}>Rs.{sum?sum:0}</span>
</Box>
    </Box>
    <Box display="flex" w="100%" justifyContent={"space-between"} mt="10px">
<Box>
<span style={theme}>Saving On Price</span>
</Box>
<Box>
<span style={theme}>Rs.{savings?savings:0}</span>
</Box>
    </Box>
    <Box display="flex" w="100%" justifyContent={"space-between"} mt="10px">
<Box>
<span style={theme}> SubTotal</span>
</Box>
<Box>
<span style={theme}>Rs.{sumafterdiscount?sumafterdiscount:0}</span>
</Box>
    </Box>
    <Box display="flex" w="100%" justifyContent={"space-between"}>
<Box>
<span style={theme}>Shipping Charges</span>
</Box>
<Box>
<span style={theme}>Rs.{shippingcharge}</span>
</Box>
    </Box>
    <hr style={{marginTop:"15px"}}></hr>
    </Box>
    <Box display="flex" w="100%" justifyContent={"space-between"}>
<Box>
<Heading fontWeight={"light"} theme>Order Total</Heading>
</Box>
<Box>
<span style={theme}>Rs.{sumafterdiscount?sumafterdiscount+shippingcharge:0}</span>
</Box>
</Box>
    <Box display="flex" w="100%" justifyContent={"space-between"}>
<Box>
<span style={theme}>You Save</span>
</Box>
<Box>
<span style={theme}>Rs.{savings?savings:0}</span>
</Box>
  


  </Box>
 <Button onClick={()=>setPaymentmethod(!paymentmethod)} display="block" bg="pink.400" _hover={{bg:"pink.500"}} color="white" margin="auto" mt="50px" width="90%" isDisabled={sum==0?true:false}>Place Order</Button>
 <Link to="/checkout"><Button display={paymentmethod==false?"none":"block"} bg="green.400" _hover={{bg:"green.500"}} color="white" margin="auto" mt="10px" width="90%" isDisabled={sum==0?true:false}>By Online Payment</Button></Link>

 <Link to="/cashondelivery"><Button  display={paymentmethod==false?"none":"block"} bg="green.400" _hover={{bg:"green.500"}} color="white" margin="auto" mt="10px" width="90%" isDisabled={sum==0?true:false}>Cash On Delivery</Button></Link>
 
 <Link to="/primer"><Heading  fontWeight="light" theme mt="30px">or? Shopping More</Heading></Link>
  </Box>
</Box>

</Box>
<LargeWithLogoCentered/>




   </>
  )
}
