
 
  
  
 

  
  
  
import React from 'react';
  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
  useToast,


} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import Slider2 from './secondslide';
import { Authcontext } from '../AuthProvider.jsx/AuthProvider';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../Reducer/AddToCardReducer/Action';
  {/* // "ratings":String,
  // "ratingcount":String,
  // "type":String,
  // "img":String,
  // "productbrand":String,
  // "product-price":String,
  // "product-sizeButton":String,
  // "price":String,
  // "product-discountPercentage":Number,
  // "id":Number,
  // "range":String,
  // "discountrange":String,
  // "quantity":Number, */}
  function Rating({ rating, numReviews }) {
    // const handleaddtocart=()=>{
    //   console.log("hi")
    
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
          {numReviews} 
        </Box>
      </Box>
    );
  }
const ourdata = [{
  "product-price":"299",
  "product-sizeButton":"30Ml",
  productbrand:"NYKA",
  "product-discountPercentage":5,
  range:"200-300",
  discount:"5",
  quantity:1,

  isNew: true,
  img:
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/278196/ny-bae-loose-glitter-eyeshadow-diamond-red-14-2-g_6_display_1670391161_38f53279.jpg',
  type: 'EYE Shaddow...',
  price: "259",
  ratings: "4.2",
 ratingcount: "34",
},
{
  "product-price":"199",
  "product-sizeButton":"20Ml",
  productbrand:"Alps",
  "product-discountPercentage":5,
  range:"200-300",
  discount:"5",
  quantity:1,
  isNew: true,
  img:
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/300648/alps-goodness-glow-with-papaya-vitamin-c-and-ahas-night-cream-50g_13_display_1667478351_cf612032.jpg',
  type: 'NightCream..',
  price: "150",
  ratings:" 4.2",
  numReviews: 34,
  ratingcount:"100"
},
{
  "product-price":"329",
  "product-sizeButton":"30Ml",
  productbrand:"Faces Canada",
  "product-discountPercentage":5,
  range:"300-400",
  discount:"5",
  quantity:1,
  isNew: true,
  img:
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/324200/faces-canada-comfy-matte-crayon-i-creamy-matte-i-chamomile-and-shea-butter-i-alcohol-free-i-on-fleek-06-2-8g_5_display_1672660038_e666f173.jpg',
  type: 'Mattee Cryon...',
  price:"170",
  ratings:" 4.2",
  numReviews: 34,
  ratingcount:"166"
},
{
  "product-price":"200",
  "product-sizeButton":"30Ml",
  productbrand:"Faces Canada",
  "product-discountPercentage":5,
  range:"200-300",
  discount:"5",
  quantity:1,
  isNew: true,
  img:
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/315293/faces-canada-ultime-pro-splash-nail-enamel-rustini-60_7_display_1662449038_c207a8f0.jpg',
  type: 'Nail Enamol...',
  price: "400",
  ratings: "4.2",
  numReviews:" 34",
}

];


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
function JustArrived() {
  const dispatch=useDispatch()
  const toast=useToast()

 const logindata=useSelector((state)=>state.loginreducer)
 const {token}=logindata
  const handleaddtocart=(ratings,ratingcount,type,img,productbrand,productprice,productsizebutton,price,productdiscountpercentage,id,range,discountrange,quantity)=>{

    if(token){
      let obj={

        "ratings":ratings,
    "ratingcount":ratingcount,
    "type":type,
    "img":img,
    "productbrand":productbrand,
    "product-price":productprice,
    "product-sizeButton":productsizebutton,
    "price":price,
    "product-discountPercentage":productdiscountpercentage,
    "id":id,
    "range":range,
    "discountrange":discountrange,
    "quantity":quantity,}
    // console.log(obj)
      dispatch(addtocart(obj,token)).then((res)=>{
        // console.log(res)
        toast({"description":res.data.msg,"status":"success","position":"top"})
      }).catch((er)=>{
        // console.log(er)
        toast({"description":er.response.data.msg,"status":"error","position":"top"})
      })
    }else{
      toast({"description":"Please Login First","position":"top","status":"error"})
    }
    // console.log(ratings,ratincount,discount,type,img,range,quantity,productbrand,productsizebutton,price,productdiscountpercentage,id,range)
   
    
  }
  return (
      <div>
      <Heading as='h4' size='md' mt="40px" textAlign={"center"}>BestSellors</Heading>
      <Box display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(4,1fr)","repeat(4,1fr)"]}  gap="20px" spacingX='40px' spacingY='20px' >
      {typeof ourdata!=="undefined"&& ourdata.length!==0&&ourdata.map((el,index)=>
      
      <Box
     w="100%"
 key={index}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {ourdata && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

       <Image
w="100%"
transition={"transform 1s ease "}
_hover={{transform:"scale(0.8)"}}
        // height="200px"
        // width="100%"
          src={el.img}
          alt={`Picture of ${el.type}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {el.isNew && (
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
              {el.type&&el.type}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
    {/* // "ratings":String,
  // "ratingcount":String,
  // "type":String,
  // "img":String,
  // "productbrand":String,
  // "product-price":String,
  // "product-sizeButton":String,
  // "price":String,
  // "product-discountPercentage":Number,
  // "id":Number,
  // "range":String,
  // "discountrange":String,
  // "quantity":Number, */}
              <chakra.a onClick={()=>handleaddtocart(el.ratings,el.ratingcount
,el.type,el.img,el.productbrand,el["product-price"],el["product-sizeButton"],el.price,
              el["product-discountPercentage"],el.id,el.range,el.discountrange,el.quantity)} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>
<Box>
  Brand:{el["productbrand"]&&el["productbrand"]}
</Box>
<Box>
  Discount:{el["product-discountPercentage"]&&`(${el["product-discountPercentage"]}% Off)`}
</Box>
<Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} textAlign={"center"}>
          <Box >

            <Rating rating={el.ratings&&el.ratings} numReviews={el.ratings&&el.ratings} /></Box>
            <Box  >
              <Box  as="span" color={'gray.600'} >
                Rs.{el["product-price"]&&el["product-price"]}
              </Box>
              {/* {data.price.toFixed(2)} */}
            </Box>
          </Box>
        </Box>
      </Box>
      
      )
    
    
    }
      
    </Box>
    </div>
  );
}

export default JustArrived