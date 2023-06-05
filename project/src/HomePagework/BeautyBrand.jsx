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
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649875_havells-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649888_biotique-natural-makeup-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649861_salon-in-a-box-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649892_ucanbe-600x809.jpeg',
   
  },
  {
    isNew: true,
    imageURL:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649874_hiphop-600x809.jpeg",
   
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649879_dr-rashel-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649865_o-p-i-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649872_indus-valley-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649882_chik-600x809.jpeg',
   
  },
  {
    isNew: true,
    imageURL:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649882_chik-600x809.jpeg",
   
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649875_havells-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649888_biotique-natural-makeup-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649861_salon-in-a-box-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649892_ucanbe-600x809.jpeg',
   
  },
  {
    isNew: true,
    imageURL:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649874_hiphop-600x809.jpeg",
   
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649879_dr-rashel-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649880_dermatouch-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649880_dr-batra-s-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649893_truthsome-600x809.jpeg',
   
  },
  {
    isNew: true,
    imageURL:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676649896_sp-600x809.jpeg",
   
  },
  
  {
    isNew: true,
    imageURL:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676656813_milani-600x809.jpeg",
   
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676656822_favon-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676656835_soulflower-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676656828_ay-600x809.jpeg',
  
  },
  {
    isNew: true,
    imageURL:
      'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676656836_set-wet-600x809.jpeg',
   
  },
  {
    isNew: true,
    imageURL:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676723350_in-color-600x809.jpeg",
   
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
  
  function BeautyBrand() {
    return (
        <div>
      <Box w="100%" mt="30px" ml="20px">
    <Image w="100%" src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676638824_beauty-brand-web.jpg"/>
    
    </Box>
      <Grid mt="30px" ml="20px" templateColumns={{base:'repeat(1, 1fr)',md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} gap={3}>
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
      <Box w="80%" margin="auto">
      <Box  mt="30px">
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1676640075_disocver-web-.gif"/>

      </Box>
      <Box mt="30px" >
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1639028230_alert-strip-web.jpg"/>

      </Box>
      <Box  mt="90px" >
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1662556480_benefit-icons-strip-web.jpg"/>

      </Box></Box>
      </div>
    );
  }
  
  export default BeautyBrand;