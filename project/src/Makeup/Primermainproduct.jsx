 import styles from "./Primermainproduct.module.css"
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
    SimpleGrid,
    Button
  } from '@chakra-ui/react';
  import { TfiFaceSad } from 'react-icons/tfi';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart} from 'react-icons/fi';

  import { Authcontext } from '../AuthProvider.jsx/AuthProvider';
  import { useContext,useEffect,useState } from 'react';
import LargeWithLogoCentered from '../HomePagework/Footer';
import { useParams, useSearchParams,Link} from 'react-router-dom';
  
  
  function Rating({ rating, numReviews }) {
    return (
      
      <Box display="flex"  alignItems="center">
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
          {numReviews} {numReviews > 1 }
        </Box>
      </Box>
    );
  }
  
  function PrimermainProduct({products,handlepage,total}) {
let maindata=products.data

    const [searchParams,setSearchParams]=useSearchParams()
    const get=searchParams.getAll("productbrand")
    const getprice=searchParams.getAll("range")
    const [price,setPrice]=useState(getprice||[])
    const [brand,setBrand]=useState(get||[])
    const getdiscount=searchParams.getAll("discountrange")
    const [discount,setDiscount]=useState(getdiscount||[])
    console.log(get)
    const handlediscount=(e)=>{
      let value=e.target.value
      let newdiscount=[...discount]
      if(newdiscount.includes(value)){
        newdiscount=newdiscount.filter((el)=>el!==value)
      }
      else{
        newdiscount.push(value)
      }
      setDiscount(newdiscount)
    }
const handleprice=(e)=>{
  let newprice=[...price]
  let value=e.target.value
  if(newprice.includes(value)){
    newprice=newprice.filter((el)=>el!==value)
  }
  else{
    newprice.push(value)
  }
  setPrice(newprice)
}
    const handlechange=(e)=>{
      const value=e.target.value
     let newbrand=[...brand]
      if(newbrand.includes(value)){
        newbrand=newbrand.filter((el)=>el!==value)
      }
      else{
        newbrand.push(value)
      }
      setBrand(newbrand)
    }
   
    let arr=[]
    for(let i=0;i<total/4;i++){
      arr.push(0)
    }
    useEffect(()=>{
      let params={
        "productbrand":brand,
        "range":price,
        "discountrange":discount
      }
      setSearchParams(params)
    },[brand,price,discount])
    const{username,arrangeusername}=useContext(Authcontext)
    // console.log(discount)

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Check if the scroll position exceeds a certain threshold
        const shouldFix = window.scrollY > 200; // Change '200' to your desired threshold
  
        setIsFixed(shouldFix);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div style={{marginTop:"30px"}}>
          <Box  display={"flex"}  justifyContent={"space-between"} gap={"20px"}  >
          {/* .boxScroll{
    border: 0px solid black;
    width: 50%;
    overflow-x: hidden;
    overflow-y: auto;
} */}

<Box position={"sticky"} top="1" height="700px"   width={["45%","50%","20%","20%","20%","20%"]} >
<heading  as="h6" fontWeight="light">Primer Items:-{typeof maindata!=="undefined"&&maindata.length}(per page)</heading>

<Box overflow={"scroll"} width={"100%"} height={"600px"}>
<hr style={{marginTop:"20px"}}></hr>
<Box overflow={"scroll"} width={"90%"} height={"300px"} margin={"auto"} textAlign={"left"}>
 
  <Heading  as="h6" fontWeight="bold" size="sm" marginLeft="0px" display="block">Brand</Heading>
<Box >
<input  onClick={handlechange} value="Smashbox" type="checkbox"  checked={brand.includes("Smashbox")} /><label style={{marginLeft:"6px"}}>Smashbox</label></Box>
<Box>
<input  onClick={handlechange} value="Colorbar" type="checkbox" checked={brand.includes("Colorbar")} /><label style={{marginLeft:"6px"}}>Colorbar</label></Box>

<Box>
<input  onClick={handlechange} value="FACES CANADA" type="checkbox" checked={brand.includes("FACES CANADA")} /><label style={{marginLeft:"6px"}}>FACES CANADA</label></Box>

<Box>
<input  onClick={handlechange} value="MARS" type="checkbox" checked={brand.includes("MARS")} /><label style={{marginLeft:"6px"}}>MARS</label></Box>

<Box>
<input  onClick={handlechange} value="Lakme" type="checkbox" checked={brand.includes("Lakme")} /><label style={{marginLeft:"6px"}}>Lakme</label></Box>
<Box>
<input  onClick={handlechange} value="Bobbi Brown" type="checkbox" checked={brand.includes("Bobbi Brown")} /><label style={{marginLeft:"6px"}}>Bobbi Brown</label></Box>
<Box>
<input  onClick={handlechange} value="Iba" type="checkbox" checked={brand.includes("Iba")} /><label style={{marginLeft:"6px"}}>Iba</label></Box>
<Box>
<input onClick={handlechange} value="EStee Lauder"  type="checkbox" checked={brand.includes("EStee Lauder")} /><label style={{marginLeft:"6px"}}>EStee Lauder</label></Box>
<Box>
<input onClick={handlechange}  value="Chambor" type="checkbox" checked={brand.includes("Chambor")} /><label style={{marginLeft:"6px"}}>Chambor</label></Box>
<Box>

<Box>
<input onClick={handlechange} value="Plum" type="checkbox" checked={brand.includes("Plum")} /><label style={{marginLeft:"6px"}}>Plum</label></Box>
<Box>
<input onClick={handlechange} value="Wet n Wild" type="checkbox" checked={brand.includes("Wet n Wild")} /><label style={{marginLeft:"6px"}}>Wet n Wild</label></Box>
<Box>
<input onClick={handlechange} value="Renee" type="checkbox" checked={brand.includes("Renee")} /><label style={{marginLeft:"6px"}}>Renee</label></Box>










<input onClick={handlechange} value="SUGAR" type="checkbox" checked={brand.includes("SUGAR")} /><label style={{marginLeft:"6px"}}>SUGAR</label></Box>
<Box >
<input onClick={handlechange} value="Maybelline" type="checkbox" checked={brand.includes("Maybelline")} /><label style={{marginLeft:"6px"}}>Maybelline</label></Box>
<Box>
<input onClick={handlechange} value="INCOLOR" type="checkbox" checked={brand.includes("INCOLOR")} /><label style={{marginLeft:"6px"}}>INCOLOR</label></Box>
<Box>
<input onClick={handlechange} value="M.A.C" type="checkbox" checked={brand.includes("M.A.C")} /><label style={{marginLeft:"6px"}}>M.A.C</label></Box>
<Box>
<input onClick={handlechange} value="SWISS BEAUTY" type="checkbox" checked={brand.includes("SWISS BEAUTY")} /><label style={{marginLeft:"3px"}}>SWISS BEAUTY</label></Box>

</Box>
<hr style={{marginTop:"20px"}}></hr>
<Box  overflow={"scroll"}  height={"200px"} width={"90%"} margin={"auto"}  textAlign={"left"}>
 
  <Heading  as="h6" fontWeight="bold" size="sm" marginLeft="0px" display="block">Brand</Heading>
  <Box>
<input  onClick={handleprice} value="50-188" type="checkbox"    checked={price.includes("50-188")}/><label style={{marginLeft:"6px"}}>Rs. 50-188</label></Box>
<Box>
<input  onClick={handleprice}value="189-300" type="checkbox" checked={price.includes("189-300")}/><label style={{marginLeft:"6px"}}>Rs. 189-300</label></Box>
<Box>
<input  onClick={handleprice}value="301-500" type="checkbox" checked={price.includes("301-500")}/><label style={{marginLeft:"6px"}}>Rs. 301-500</label></Box>
<Box>
<input  onClick={handleprice}value="501-1000" type="checkbox" checked={price.includes("501-1000")}/><label style={{marginLeft:"6px"}}>Rs. 501-1000</label></Box>
<Box>
<input onClick={handleprice} value="1001-1200" type="checkbox" checked={price.includes("1001-1200")}/><label style={{marginLeft:"6px"}}>Rs. 1001-1200</label></Box>
<Box>
<input onClick={handleprice} value="1201-1500" type="checkbox" checked={price.includes("1201-1500")}/><label style={{marginLeft:"6px"}}>Rs. 1201-1500</label></Box>
<Box>
<input  onClick={handleprice}value="1501-1700" type="checkbox" checked={price.includes("1501-1700")}/><label style={{marginLeft:"6px"}}>Rs. 1501-1700</label></Box>
<Box>
<input  onClick={handleprice}value="more than 1701" type="checkbox" checked={price.includes("more than 1701")}/><label style={{marginLeft:"3px"}}>more than Rs. 1700</label></Box>

</Box>
<hr style={{marginTop:"20px"}}></hr>
<Box overflow={"scroll"}  height={"15s0px"} width={"90%"} margin={"auto"}  textAlign={"left"}>
 
  <Heading  as="h6" fontWeight="bold" size="sm" marginLeft="0px" display="block">Discount</Heading>
  <Box>
<input onClick={handlediscount} checked={discount.includes("5%-15%")}  value="5%-15%" type="checkbox"/><label style={{marginLeft:"6px"}}>5%-15%</label></Box>
<Box>
<input  onClick={handlediscount} checked={discount.includes("16%-25%")} value="16%-25%" type="checkbox"/><label style={{marginLeft:"6px"}}>16%-25%</label></Box>
<Box>
<input  onClick={handlediscount} checked={discount.includes("26%-30%")} value="26%-30%" type="checkbox"/><label style={{marginLeft:"6px"}}>26%-30%</label></Box>
<Box>
<input onClick={handlediscount} checked={discount.includes("31%-40%")} value="31%-40%" type="checkbox"/><label style={{marginLeft:"6px"}}>31%-40% </label></Box>
<Box>
<input onClick={handlediscount} checked={discount.includes("41%-50%")} value="41%-50%" type="checkbox"/><label style={{marginLeft:"6px"}}>41%-50% </label></Box>




</Box>
</Box>
</Box>
{/* .boxScroll{
    border: 0px solid black;
    width: 50%;
    overflow-x: hidden;
    overflow-y: auto;
} */}
      <Box    w="80%"  margin="auto">
        {typeof maindata!=="undefined"&&maindata.length!==0?
      <SimpleGrid columns={{base:"1",md:"2",lg:"4"}} spacingX='40px' spacingY='20px' >
        {typeof maindata!=="undefined"&& maindata.length!==0&&maindata.map((el,index)=>
        
        <GridItem
       w="100%"
   
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {maindata && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Link  to={`/primer/${el._id}`}><Image
 

//  #image {
//   position: relative;
//   display: inline-block;
//   transition: transform 0.3s ease;

// }

// #image:hover img {
//   transform: scale(1.2);
// }
transition={"transform 1s ease "}
_hover={{transform:"scale(0.8)"}}
          // height="200px"
          // width="100%"
            src={el.img}
            alt={`Picture of ${el.typw}`}
            roundedTop="lg"
          /></Link>
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {el.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {el.type}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={`/primer/${el.id}`} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
  <Box>
    Brand:{el["productbrand"]}
  </Box>
  <Box>
    Discount:{`(Rs.${el["product-discountPercentage"]}% Off)`}
  </Box>
  <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} textAlign={"center"}>
            <Box >

              <Rating rating={el.ratings} numReviews={el.ratings} /></Box>
              <Box  >
                <Box  as="span" color={'gray.600'} >
                  Rs.{el["product-price"]}
                </Box>
                {/* {data.price.toFixed(2)} */}
              </Box>
            </Box>
          </Box>
        </GridItem>
        
        )
      
      
      }
        
      </SimpleGrid>:<Box margin="auto" width="40%" >
        <Image opacity={"0.5"} src="https://cdn.dribbble.com/userupload/2905383/file/original-4ea237e94e803ddd575a66eb32198899.png?compress=1&resize=400x300&vertical=top"/>
        </Box>
  }      
      
      </Box>
       </Box>
      {/* <Slider2/> */}
      {arr.map((item,index)=>
      <Button ml="5px" bg="gray.300" mt="30px" onClick={()=>handlepage(index+1)}>{index+1}</Button>)}
      <LargeWithLogoCentered/>

      </div>
    );
  }
  
  export default PrimermainProduct;