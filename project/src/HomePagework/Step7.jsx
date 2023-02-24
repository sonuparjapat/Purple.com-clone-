
import {Grid,GridItem,Image,Box} from "@chakra-ui/react"
import FourthSlide from "./FourthSlide"
import ProductAddToCart from "./Featured"
import Category from "./Category"
import Step5 from "./step5"
import Step6 from "./Step6"
import JustArrived from "./JustArrived"
const images=[
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676890678_ezgif-4-1a9a710bf8.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677057198_dd-celebs_pb.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676962363_sq-celebs_pb-sq-50-.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676641764_streax-streax-professional-copy-1-1440x700.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677072853_plum-copy-1-1440x700.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677068306_minimalist-copy-1-1440x700.png",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676901334_maybelline-copy-1.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676962350_celebs_pb-mini-lipstick-purplle-rs.375.-.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677057198_dd-celebs_pb.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677057201_ag-diamondkit_celeb_freebee1-1.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677068305_mcaffeine-copy-1-1440x700.png",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676717539_loreal_celeb.gif?tr=f-gif"
  
]
export default function Step7(){

    return (
        <div style={{marginTop:"30px"}}>
<Grid w="98%" margin="auto" templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}}>
{images.map((item,index)=>
<GridItem >
<Image src={item} />
</GridItem>)}
</Grid>
<Box>
    <Image mt="24px" src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676988831_flash-web.jpg"/>
</Box>


</div>
    )




}