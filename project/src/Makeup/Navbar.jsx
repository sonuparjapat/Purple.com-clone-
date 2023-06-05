import logo from "./myimg/shineugif.gif";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import { faArrowRightToBracket, faCartArrowDown, faColonSign, faHome, faLongArrowLeft, faSearch, faSign, faSignIn, faSignOut, faSmile } from "@fortawesome/free-solid-svg-icons";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Img,
    Input,
    Spacer
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,


  } from '@chakra-ui/icons';


import { useState } from "react";
  import { useContext } from "react";
  import { Authcontext } from "../AuthProvider.jsx/AuthProvider";
import { useSelector } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

  // const{username,arrangeusername,inputvalue,ourinput}=useContext(Authcontext)
  const logindata=useSelector((state)=>state.loginreducer)
  const {username,token}=logindata
  // const{inputvalue}=useContext(Authcontext)

    return (
      <Box width="100&">
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
      
            <Image
        
        height={10}
            src={logo}
   


           />
       
        
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
     

          </Flex>
          <Box  mr={{base:"20px",md:"20px",lg:"50"}} display="flex" marginLeft={{base:"5px"}} w={{base:"50%",md:"20%",lg:"33%"}}>
            <Box  w={{md:"95%"}} >
       
          <Input  marginRight="30px" variant='outline' placeholder='Search Items' w="99%"/></Box><Box><Button  opacity="0.5"><FontAwesomeIcon icon={faSearch} /></Button></Box>  </Box>
          
          <Box w={{base:"40%",md:"9%",lg:"15%"}} ml={4}  display="flex" justifyContent="space-between">
            
<Link to="/login" style={{marginTop:"10px"}}><FontAwesomeIcon _hover={{color:username?"red":""}} icon={username?faSignOut:faSignIn} /></Link>
    <Link to="/cart" style={{marginTop:"10px"}}><FontAwesomeIcon icon={faCartArrowDown} /></Link>
    {/* <Link to="/favourate" style={{marginTop:"10px"}}><FontAwesomeIcon icon={faSmile} /></Link> */}
    <Box borderRadius={5} ><p style={{marginTop:"5px",color:"#ff00c6",fontWeight:"bold"}}>{username?username:"user:"}</p></Box>
  </Box>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        {/* <Carousel/> */}
      </Box>
    
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack mt="10px"direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                 to={navItem.href}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children,href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
      <Link to={href}><Flex
          py={2}
         
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex></Link>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} to={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
      
    );
  };
  
  
  
  const NAV_ITEMS = [
    {
      label: 'Make Up',
      children: [
        {
          label: 'Primer',
         subLabel:"Gives you a Cassic look",
          href: '/primer',
        },
        {
          label: 'Concealer',
          subLabel: 'Try this once',
          href: '/Primer',
        },
      ],
    },
    {
      label: 'Skin Care',
      children: [
        {
          label: 'Face Wash',
          subLabel: 'Get a Glow',
          href: '/primer',
        },
        {
          label: 'Cleanser',
          subLabel: 'Make your skin happy',
          href: '/primer',
        },
      ],
    },
    {
      label: 'Personal Care',
      href: '/primer',
    },
    {
      label: 'Men',
      href: '/primer',
    },
  ];