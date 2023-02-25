import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue,Image, Heading } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import PrimerProduct from './PrimerProducts';



// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function PrimerCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://media6.ppl-media.com/mediafiles/ecomm/misc/1675072729_webhero_tag.jpg',
    'https://media6.ppl-media.com/mediafiles/ecomm/misc/1676970194_faces_yami-range-creative-2596x836.png',
    'https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1675360432_serum-combined-hp-web.gif',
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677070210_lakme_mrunal-2596x836-1.jpeg"
  ];

  return (
    <div>
    <Box
       position={'relative'}
      height={'500px'}
     width="90%"
     margin={"auto"}
   overflow={'hidden'}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      /> 
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
      
      
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        display={{base:"none",md:"inline",xl:"inline"}}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        display={{base:"none",md:"inline",xl:"inline"}}
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt/>
      </IconButton>
      {/* Slider */}
      <Slider 
      
      {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box height={"400px"}>
<Image

key={index}
        
    
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          width="100%"
          height="100%"
        
            src={url}
                
        




/>


          </Box>
      
 

           
         
        ))}
      </Slider>
   
    </Box>
    {/* <Box>
<ProductAddToCart/>
    </Box> */}
  <Heading>PRIMER</Heading>
  <p>ALL PRODUCTS</p>

    </div>
  );
}