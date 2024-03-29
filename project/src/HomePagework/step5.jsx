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
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
  const ourdata = [{
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/275402/alps-goodness-tea-tree-oil-hyaluronic-acid-and-ketoconazole-anti-dandruff-scalp-serum-for-oily-scalp-30-ml-85_1_display_1663332851_7f1da563.jpg',
    name: 'Wayfarer Classic',
    price: "259",
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/335205/minimalist-8-percentage-glycolic-acid-face-toner-in-free-acid-form-with-bamboo-water-for-exfoliating-and-smoothening-skin_1_display_1667318344_d51d1f44.jpg',
    name: 'Wayfarer Classic',
    price: "150",
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/259394/alps-goodness-fenugreek-biotin-and-redensyl-anti-hairfall-conditioner-200-ml_15_display_1667570393_b24a4636.jpg',
    name: 'Wayfarer Classic',
    price:"170",
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/274616/ny-bae-runway-radiance-compact-powder-pale-ivory-9gm-39_5_display_1670233057_4770815a.jpg',
    name: 'Wayfarer Classic',
    price: "400",
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/250878/dermdoc-2-percentage-salicylic-acid-face-wash-for-oily-and-acne-prone-skin-type-120-ml_15_display_1667459442_d50a64f9.jpg",
    name: 'Wayfarer Classic',
    price: "300",
    rating: 4.2,
    numReviews: 34,
  },
  
];
  

  
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
  
  function Step5() {
    return (
        <div style={{marginTop:"30px"}}>
        <Box ml="20px">
    <Heading as="h5" size="sm" textAlign="left">BEST SELLORS</Heading>
    
    </Box>
      <Grid ml="20px" templateColumns={{base:'repeat(1, 1fr)',md:"repeat(2,1fr)",lg:"repeat(5,1fr)"}} gap={3}>
        {ourdata.map((data,index)=>
        
        <GridItem
       w="100%"
       key={index}
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
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
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
                {data.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">

              <Rating rating={data.rating} numReviews={data.numReviews} />
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
        
      </Grid>
      </div>
    );
  }
  
  export default Step5;