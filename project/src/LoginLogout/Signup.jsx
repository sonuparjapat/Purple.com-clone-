import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Spinner,
    Alert,
    AlertTitle,
    AlertDescription,
    AlertIcon
 
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react';
  import {Link,NavLink,useNavigate} from "react-router-dom"
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useReducer } from 'react';
import axios from "axios"
import Alertmessage from './Alert';
import { Authcontext } from '../AuthProvider.jsx/AuthProvider';
import { useContext } from 'react';
import { signupfailed, signupsuccess, usersignup } from '../Reducer/signup/Action';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinfail } from '../Reducer/Login/actionTypes';
import { signinfailed, signinsucccess } from '../Reducer/Login/action';
const initdata={
  "name":"",
  "email":"",
  "password":""
}

  
  export default function Signup() {
   const [signup,setSignup]=useState(initdata)
const toast=useToast()
const dispatch=useDispatch()
const data=useSelector((state)=>state.signupreducer)
 const {isLoading,isError,isAuth,status}=data
//  console.log(data)
 const navigate=useNavigate()
//  console.log(status)
// console.log(status)
const handlechange=(e)=>{
  const {name,value}=e.target
  setSignup((pre)=>({...pre,[name]:value}))
}

// console.log(signup)

const handlesubmit=(e)=>{
  e.preventDefault()
  // console.log(signup
  //   )
  const {name,email,password}=signup
  if(name&&email&&password){
  
   dispatch(usersignup(signup)).then((res)=>{
    dispatch(signupsuccess())
// console.log(res)
    toast({"description":res.data.msg,"position":"top",status:"success"})
    navigate("/login")}).catch((err)=>{
dispatch(signupfailed())
toast({"description":err.response.data.msg,"position":"top",status:"error"})
   })

}
  else {
   toast({"description":"Please Provide All The Details","position":"top"})
  }
  // console.log(signup)
}



console.log(isLoading)
 
    return (

      <>

      
      
      
      
    
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool products ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              {/* <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input name="name"  onChange={handlechange} type="text" />
                </FormControl>
              </Box> */}
             
            </HStack>
            <form onSubmit={handlesubmit}>
            <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
               
                <Input name="name" onChange={handlechange} type="text" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
               
                <Input name="email" onChange={handlechange} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
               
                  <Input name="password" onChange={handlechange} type="password" />
                 
                
              </FormControl>
              <Stack spacing={10} pt={2}>
          
              {isLoading==true?  <Button
           
                // isLoading colorScheme='teal' variant='solid'
             isDisabled
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
               <Spinner/>
                </Button>:
                <Button
            
                // isLoading colorScheme='teal' variant='solid'
              type="submit"
                
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
  }
                
            
              
                

              </Stack> </form>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/login" isActivecolor={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>  </>
    );
  }