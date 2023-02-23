
import {Grid,GridItem,Image,Box} from "@chakra-ui/react"
import FourthSlide from "./FourthSlide"
import ProductAddToCart from "./Featured"
import Category from "./Category"
import Step5 from "./step5"
import Step6 from "./Step6"
import JustArrived from "./JustArrived"
import Step7 from "./Step7"
const images=[
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677057195_ny-celebs_pb-36-pan-eyeshadow-299-.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677072852_sugar-1440x700-3.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677039348_biotique-copy-1.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677131361_mamaearth-copy-1-1440x700-1.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1677042945_swiss-beauty-1.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676641774_lakme-1440x700.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676901334_maybelline-copy-1.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676970191_faces-canada-3.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676970191_faces-canada-3.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677057201_ag-diamondkit_celeb_freebee1-1.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677139166_schwarzkopf-professional-copy-1-1440x700.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676717539_loreal_celeb.gif?tr=f-gif"
  
]
export default function Step4(){

    return (
        <div>
<Grid w="98%" margin="auto" templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}}>
{images.map((item,index)=>
<GridItem >
<Image src={item} />
</GridItem>)}
</Grid>
<Box>
    <Image mt="24px" src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1676988831_flash-web.jpg"/>
</Box>
<Category/>
{/* <Step5/> */}
<Step6/>
<Step7/>
<JustArrived/>

</div>
    )




}