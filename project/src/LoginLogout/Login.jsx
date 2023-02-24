import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,

  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { useReducer, useState } from 'react';
import axios from 'axios';


import { useContext } from 'react';
import { Authcontext } from '../AuthProvider.jsx/AuthProvider';
import Logout from './Logout';
const initdata={
"email":"",
"password":"",

}
const reducer=(state,action)=>{
  const{type,payload}=action
  switch(type){
    case "email":{
      state={...state,email:payload}
      return state
    }
    case "password":{
      state={...state,password:payload}
    }
    default:{
      return state
    }
  }
}
  export default function Login() {
    const [state,dispatch]=useReducer(reducer,initdata)
const[isLoading,setIsloading]=useState(false)
const[isError,setIsError]=useState(false)
const[token,setToken]=useState("")
const navigate=useNavigate();
const{arrangeusername}=useContext(Authcontext)

console.log(state)
const loginuser=()=>{
  if(state.email&&state.password){

  
  setIsloading(true)
  axios({
    method:"Post",
    url:"https://reqres.in/api/login",
    data:{
      email:`${state.email}`,
      password:`${state.password}`
    }
  }).then((res)=>{
   
    setIsloading(false)
    alert("Login Successfully")
    navigate("/")
  setToken(res.data.token)}).catch((error)=>{
    setIsError(true)
    setIsloading(false)
    alert("Wrong Credentials")
  })}
  else{
    alert("Please Fill All The Details")
  }
}

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=>dispatch({type:"email",payload:e.target.value})} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={(e)=>dispatch({type:"password",payload:e.target.value})} type="password" />
              </FormControl>
              <Stack spacing={10}>
                {/* <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack> */}

{isLoading?
                <Button
                isLoading colorScheme='teal' variant='solid'
                // isLoading colorScheme='teal' variant='solid'
                onClick={loginuser}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>:
                
                <Button
               
                // isLoading colorScheme='teal' variant='solid'
                onClick={loginuser}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                 Log In
                </Button>
                
                }
<Logout/>


              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }