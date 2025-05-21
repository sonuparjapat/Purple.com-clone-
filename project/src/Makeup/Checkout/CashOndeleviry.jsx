import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useToast,Box, HStack, PinInput, PinInputField } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { checking } from '../../Reducer/PaymentCheckReducer/Action';
import { handlebacking, handlebacking2 } from '../../Reducer/PaymentCheckReducer/HandlebackReducer/Action';
import { useraddress } from '../../Reducer/Addressreducer/Action';
import theme from './CreateTheme';
import { Button, ThemeProvider } from '@mui/material';
import SimpleNav from '../../HomePagework/SimpleNav';
let initialdata={
  
    "firstName":"",
    "lastName":"",
    "address1":"",
    "address2":"",
    "city":"",
    "state":"",
    "zip":"",
    "country":""
}
export default function CashOnDelivery() {
    const [data,setData]=useState(initialdata)
    const {firstName,lastName,city,zip,country,address1}=data
const [checked,setChecked]=useState(false)

   const handlechange=(e)=>{
        const {name,value}=e.target
        setData((pre)=>({...pre,[name]:value}))
    }
const toast=useToast()
const [check,setCheck]=useState(false)

    const handlecheck=()=>{
        const {firstName,lastName,city,zip,country,address1}=data
        if(firstName&&lastName&&city&&zip&&country&&address1){
        
            // dispatch(handlebacking2)
       
            // setChecked(!checked)
        }else{
            toast({"description":"please provide the details","status":"error","position":"top"})
        }
    }
    
  return (
    <ThemeProvider theme={theme}>
        <SimpleNav/>
        <Box w="60%" margin="auto" mt="100px">
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={<Checkbox onChange={handlecheck} color="secondary"  name="saveAddress" disabled={firstName&&address1&&zip&&country&&city&&lastName?false:"true"} />}
            label="Use this address for payment details"
          /> */}
        </Grid>
      </Grid>
      <Button   disabled={firstName&&lastName&&address1&&zip&&country&&city?false:true}>PlaceOrder</Button>
   
    </React.Fragment>
   
    
    
    
    </Box></ThemeProvider>
  );
}
