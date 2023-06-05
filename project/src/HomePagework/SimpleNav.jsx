import React from 'react'
import { Box } from '@chakra-ui/react'
import { FiHome } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <Box bg={"#E95CCC"} w="100&" h="30px" textAlign="center">
     <Link to="/"> <Box w="10%" margin="auto"> <FiHome fontSize={"30px"} color="white" textAlign="center"/> </Box></Link>
    </Box>
  )
}
