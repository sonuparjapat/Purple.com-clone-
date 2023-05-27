import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import { useEffect } from 'react';
import LargeWithLogoCentered from '../HomePagework/Footer';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singleproduct } from '../Reducer/SingleProduct/action';
import NotFound from '../HomePagework/Notfound';
import WithSubnavigation from '../Navbar';

  
  export default function SinglePrimer() {
    const {id}=useParams()
    const dispatch=useDispatch()
    const singledata=useSelector((state)=>state.singleproductreducer)

useEffect(()=>{

dispatch(singleproduct(id))


},[])
const {isLoading,isError,data}=singledata
let maindata=data.data
if(isLoading==true){
    return <h1>Loading....</h1>
}


    return (
        <>
<WithSubnavigation/>
      <Container maxW={'7xl'}>
            {typeof maindata!=="undefined"?
  
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
            transition={"transform 1s ease "}
            _hover={{transform:"scale(0.8)"}}
              rounded={'md'}
              alt={'product image'}
              src={
              maindata.img
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {maindata.type}
              </Heading>
              <Heading
              color="#68d391"
               lineHeight={1.1}
               fontWeight={600}
               fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}>
               {maindata.productbrand}
              
                
              </Heading>
              {/* <Text
                // color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
               Rs.{maindata["product-price"]} only
              </Text> */}
            </Box>

  
  
 
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
              
                />
              }>
              {/* <VStack spacing={{ base: 4, sm: 6 }}> */}
                {/* <Text
                //   color={useColorModeValue('gray.500', 'gray.400')}
                color="gray.400"
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Discount:-{maindata["product-discountPercentage"]}%
                </Text> */}
              
              {/* </VStack> */}
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                //   color={useColorModeValue('yellow.500', 'yellow.300')}
                color="yellow.500"
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Moisturizing</ListItem>
                    <ListItem>Cleansing</ListItem>{' '}
                    <ListItem>Soothing or calming</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Fragrance</ListItem>
                    <ListItem>Long-lasting</ListItem>
                    <ListItem>Natural or organic ingredients</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                //   color={useColorModeValue('yellow.500', 'yellow.300')}
                color="yellow.500"
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      product-price:
                    </Text>{' '}
                 {maindata["product-price"]}Rs
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Quantity/size:
                    </Text>{' '}
                   {maindata["product-sizeButton"]}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      RatingCount:
                    </Text>{' '}
                    {maindata["ratingcount"]}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Ratings:
                    </Text>{' '}
                {maindata["ratings"]}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Discount:
                    </Text>{' '}
                   {maindata["product-discountPercentage"]}%
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                  
                    </Text>{' '}
                   
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                   
                    </Text>{' '}
                  
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
            //   bg={useColorModeValue('gray.900', 'gray.50')}
            bg="gray.500"
            color="whte"
            //   color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>:"something going wrong"}
      </Container>
      <LargeWithLogoCentered/> </>
    )
  }