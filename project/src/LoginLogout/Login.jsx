import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
 
    Button,
    Heading,
    Text,
    useColorModeValue,
    Toast,
    useToast,
    Spinner,

  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import { useReducer, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { useContext } from 'react';
import { Authcontext } from '../AuthProvider.jsx/AuthProvider';
import Logout from './Logout';
import { signinfailed, signinsucccess, usersignin } from '../Reducer/Login/action';
import { useDispatch,useSelector } from 'react-redux';
const initdata={
"email":"",
"password":"",

}

  export default function Login() {
  const [login,setLogin]=useState(initdata)
  const dispatch=useDispatch()
  const selector=useSelector((state)=>state.loginreducer)
  const {isLoading,isError}=selector
  const toast=useToast()
const handlechange=(e)=>{
  const {name,value}=e.target
  setLogin((pre)=>({...pre,[name]:value}))
}
const navigate=useNavigate()
const location=useLocation()
const handlesubmit=(e)=>{
  e.preventDefault()
dispatch(usersignin(login)).then((res)=>{
  dispatch(signinsucccess(res.data))
  
  localStorage.setItem("usertoken",res.data.token)
localStorage.setItem("username",res.data.username)
  // localStorage.setItem("username",res.data)
  
  toast({"description":res.data.msg,"position":"top","status":"success"})
  navigate(location.state,{replace:true})
}).catch((err)=>{
  dispatch(signinfailed())
toast({"description":err.response.data.msg,"position":"top","status":"error"})
})
}
// console.log(login)
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
            <form onSubmit={handlesubmit}>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input name="email" onChange={handlechange} type="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input name="password" onChange={handlechange} type="password" />
              </FormControl>
              <Stack mt="20px" spacing={10}>
              


              {isLoading==true?
              
              <Button 
              // isLoading colorScheme='teal' variant='solid'
        isDisabled
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
               <Spinner/>
              </Button>
            
            :  <Button 
                // isLoading colorScheme='teal' variant='solid'
              type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign In
                </Button>}
                
              
<Logout/>


              </Stack>
              <Box mt="5px"><Link  to="/signup">Or SignUp?</Link></Box>
              </form>   </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }