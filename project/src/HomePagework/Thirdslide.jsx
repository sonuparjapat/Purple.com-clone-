
// 

        
 





import React from 'react';
import { Box, IconButton, useBreakpointValue,Image, Heading } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const images=[
  {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1677076373_min-30-live.gif"},
  {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1677076364_125-live.gif"},
  {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1677076371_flat-60-live.gif"},
  {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677076360_99-time-lock.jpg"},
  {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677076357_75-time-lock.jpg"},
  {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677076368_299-sold-out.jpg"},
  {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677076365_199-sold-out.jpg"}]
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

export default function ThirdSlide() {


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 5000, // Delay between slides in milliseconds
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

return (
  <><Box w="99%" margin={"auto"} mt="100px">
  <Slider {...settings}>
    {images.map((el,index)=>
    <div>
    <Image width="100%" src={el.image}/>
   
    </div>
    
    )}
    
  </Slider></Box></>
);



}

  // These are the images used in the slide


  
