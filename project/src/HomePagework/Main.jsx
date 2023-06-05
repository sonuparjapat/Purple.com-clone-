
import WithSubnavigation from "../Makeup/Navbar"
import HomepageCarousel from "./Carousel"
import Slider2 from "./secondslide"
import ThirdSlide from "./Thirdslide"
import FourthSlide from "./FourthSlide"
import Step4 from "./Step4"
import Bestsellors from "./Category"
import Step5 from "./step5"
import Step6 from "./BestSellors"
import Step7 from "./Step7"
import JustArrived from "./JustArrived"
import BeautyBrand from "./BeautyBrand"
import LargeWithAppLinksAndSocial from "./Footer"
import FeaturedProducts from "./FeaturedProducts"
import Category from "./Category"
export default function Main(){
    return (
<>
<WithSubnavigation/>
<HomepageCarousel/>
<FeaturedProducts/>
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