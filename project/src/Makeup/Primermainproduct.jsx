 
  import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Grid,
    GridItem,
    Heading,
    SimpleGrid,
    Button
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';

  import { Authcontext } from '../AuthProvider.jsx/AuthProvider';
  import { useContext } from 'react';
import LargeWithLogoCentered from '../HomePagework/Footer';
  
  
  function Rating({ rating, numReviews }) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  function PrimermainProduct({products,handlepage,total}) {
    let arr=[]
    for(let i=0;i<total/4;i++){
      arr.push(0)
    }
    const{username,arrangeusername}=useContext(Authcontext)
    console.log(username)
    return (
        <div style={{marginTop:"30px"}}>
      <Box  w="95%"  margin="auto">
      <SimpleGrid columns={{base:"1",md:"2",lg:"4"}} spacingX='40px' spacingY='20px' >
        {products.map((data,index)=>
        
        <GridItem
       w="100%"
  
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <img
          height="200px"
          width="100%"
            src={data.image}
            alt={`Picture of ${data.description}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {data.description}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={`/primer/${data.id}`} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
  <Box>
    Brand:{data.Brand}
  </Box>
            <Flex justifyContent="space-between" alignContent="center">

              <Rating rating={data.rating} numReviews={data.numviews} />
              <Box fontSize="2xl" >
                <Box ml={3} as="span" color={'gray.600'} fontSize="lg">
                  Rs.{data.price}
                </Box>
                {/* {data.price.toFixed(2)} */}
              </Box>
            </Flex>
          </Box>
        </GridItem>
        
        )}
        
      </SimpleGrid></Box>
      {/* <Slider2/> */}
      {arr.map((item,index)=>
      <Button ml="5px" bg="gray.300" mt="30px" onClick={()=>handlepage(index+1)}>{index+1}</Button>)}
      <LargeWithLogoCentered/>

      </div>
    );
  }
  
  export default PrimermainProduct;