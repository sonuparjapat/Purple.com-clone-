import { Button,AlertDialogFooter,AlertDialogBody,AlertDialogHeader,AlertDialogContent,AlertDialogOverlay
,useDisclosure,AlertDialog} from "@chakra-ui/react"

import React from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../AuthProvider.jsx/AuthProvider"
export default function Logout() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

  const{username,arrangename,removeusername}=useContext(Authcontext)
  console.log(username)
  const navigate=useNavigate()
    return (
      <>
        <Button colorScheme='red' onClick={onOpen}>
          Log Out
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}
                 >
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={()=>{
                  
                    removeusername()
                    alert("Logout Successfully")
                    onClose()
                    navigate("/")
                    
                    }} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }