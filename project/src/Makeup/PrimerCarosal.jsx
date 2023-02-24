
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Box,Image} from "@chakra-ui/react"
const images=[
    {image:"https://media6.ppl-media.com/mediafiles/ecomm/misc/1675072729_webhero_tag.jpg"},
    {image:"https://media6.ppl-media.com/mediafiles/ecomm/misc/1676970194_faces_yami-range-creative-2596x836.png"},
    {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1677076371_flat-60-live.gif"},
    {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677076360_99-time-lock.jpg"},
    {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677076357_75-time-lock.jpg"},
    {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677076368_299-sold-out.jpg"},
    {image:"https://media6.ppl-media.com/tr:w-512,ar-583-714,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677076365_199-sold-out.jpg"}

        
    ]
const PrimerCarosal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  
  };

  return (

    <Box  width="90%" ml={{base:"3px",md:"10px",xl:"55px"}} mt={7}>
    <Slider {...settings}>
      {images.map((item, index) => (
        <div  key={index}>
          <Image width="100%" height="300px" src={item.image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
    </Box>
    );
};

export default PrimerCarosal;