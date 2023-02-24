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
  import {Link,NavLink,useNavigate} from "react-router-dom"
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useReducer } from 'react';
import axios from "axios"
import Alertmessage from './Alert';
import { Authcontext } from '../AuthProvider.jsx/AuthProvider';
import { useContext } from 'react';
  const initdata={
   email:"",
   password:"",
   firstname:"",
   lastname:"" 
  }
  const reducer=(state,action)=>{
const {type,payload}=action
switch(type){
  case "firstname":{
    state={...state,firstname:payload}
    return state
  }
  case "lastname":{
    state={...state,lastname:payload}
    return state
  }
  case "Email":{
    state={...state,email:payload}
    return state
  }
  case "Password":{
    state={...state,password:payload}
    return state
  }
  default:{
    return state
  }
}
  }
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
  const [state,dispatch]=useReducer(reducer,initdata)
  const [signup,setSignup]=useState(false)
  const [login,setLogin]=useState(false)
  const[isLoading,setIsloading]=useState(false)
  const[error,setError]=useState(false)
  const[user,setUsers]=useState("")
  const[successfulpost,setSuccessfulpost]=useState(false)
  const{username,arrangeusername,removeusername}=useContext(Authcontext)
  const navigate=useNavigate()
  console.log(state)
 

console.log(user)
  useEffect(()=>{
    fetchdata()
   
  },[])
  const fetchdata=()=>{
     axios.get("https://reqres.in/api/register").then((rex)=>{
      setUsers(rex.data)
  })
  }
  console.log(state)
  const postuserdata=(e)=>{
    if(state.email&&state.password&&state.firstname&&state.lastname){
setIsloading(true)
axios.post("https://reqres.in/api/register",{

 
  email:  `${state.email}`,
 password:`${state.password}`

    }).then((res)=>{
setIsloading(false)
setSuccessfulpost(true)
alert("SIGNUP SUCCESSFULLY")

navigate("/")
arrangeusername(`${state.firstname}`)
      fetchdata()
      console.log(res)}).catch((error)=>{
        setError(true)
        setIsloading(false)
        Alertmessage("PLEASE FILL THE RIGHT DETAILS")
        console.log(error)})

}
else {
 Alertmessage("Please Provide All The Details")
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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input onChange={(e)=>dispatch({type:"firstname",payload:e.target.value})} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input onChange={(e)=>dispatch({type:"lastname",payload:e.target.value})}type="text" />
                </FormControl>
              </Box>
            </HStack>
          
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=>dispatch({type:"Email",payload:e.target.value})}type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={(e)=>dispatch({type:"Password",payload:e.target.value})} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                {isLoading?
                <Button
                isLoading colorScheme='teal' variant='solid'
                // isLoading colorScheme='teal' variant='solid'
                onClick={postuserdata}
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
                onClick={postuserdata}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
                
                }

              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/login" isActivecolor={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }