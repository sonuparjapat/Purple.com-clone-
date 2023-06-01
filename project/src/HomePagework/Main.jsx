import ProductAddToCart from "./ProductAddToCart"
import WithSubnavigation from "../Makeup/Navbar"
import Carousel from "../slide"
import Slider2 from "./secondslide"
import ThirdSlide from "./Thirdslide"
import FourthSlide from "./FourthSlide"
import Step4 from "./Step4"
import Category from "./Category"
import Step5 from "./step5"
import Step6 from "./Step6"
import Step7 from "./Step7"
import JustArrived from "./JustArrived"
import BeautyBrand from "./BeautyBrand"
import LargeWithAppLinksAndSocial from "./Footer"
export default function Main(){
    return (
<>
<WithSubnavigation/>
<Carousel/>
<ProductAddToCart/>
<Slider2/>
<ThirdSlide/>
<FourthSlide/>
<Step4/>
<Category/>
{/* <Step5/> */}
<Step6/>
<Step7/>
<JustArrived/>
<BeautyBrand/>
<LargeWithAppLinksAndSocial/>



</>


    )
}