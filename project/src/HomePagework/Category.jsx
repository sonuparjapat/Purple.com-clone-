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
      'https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676637899_make-up.jpg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676637898_haircare-2.jpg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676707783_skincare-1.jpg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676637898_body-care.jpg',
   
  },
  {
    isNew: true,
    imageURL:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676637897_korean-beauty-1.jpg",
   
  }
  
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
  
  function Category() {
    return (
        <div>
      <Box ml="20px">
    <Heading as="h5" size="sm" textAlign="left">CATEGORY STORES</Heading>
    
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
        
          <img
          height="200px"
          width="100%"
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
  
            
  
          
      
        </GridItem>
        
        )}
        
      </Grid>
      <Box mt="30px" ml="30px">
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1677074880_reminder-option-3.gif"/>

      </Box>
      </div>
    );
  }
  
  export default Category;