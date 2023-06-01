
import { Box, IconButton, useBreakpointValue,Image, Heading } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib

import PrimerProduct from './PrimerProducts';


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 5000, // Delay between slides in milliseconds
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

return (
  <><Box w="99%" margin={"auto"}>
  <Slider {...settings}>
    <div>
      <Image width="100%" src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1675360432_serum-combined-hp-web.gif"/>
      
    </div>
    <div>
    <Image width="100%"  src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677070210_lakme_mrunal-2596x836-1.jpeg"/>
   
    </div>
    <div>
    <Image width="100%"  src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1675072729_webhero_tag.jpg"/>
    
    </div>
    <div>
    <Image width="100%"  src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1676970194_faces_yami-range-creative-2596x836.png"/>
    
    </div>
  </Slider></Box></>
);



}