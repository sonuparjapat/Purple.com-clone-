import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { checking } from '../../Reducer/PaymentCheckReducer/Action';
import { useDispatch, useSelector } from 'react-redux';
import { handlebacking } from '../../Reducer/PaymentCheckReducer/HandlebackReducer/Action';
import { storedata } from '../../Reducer/PaymentCheckReducer/StorePaymentData/Action';
import { Select } from '@mui/material';
import { SelectField } from '@chakra-ui/react';
const initialdata={
  "name":"",
  "number":"",
  "date":"",
  "cvv":"",
  "card":""
}
export default function PaymentForm() {
  const [changer,setChanger]=useState(false)
  const [data,setData]=useState(initialdata)
  const handlechange=(e)=>{
    const {name,value}=e.target
    setData((pre)=>({...pre,[name]:value}))
  }
  const dispatch=useDispatch()
  const handlecheck=()=>{
    dispatch(storedata(data))
    dispatch(handlebacking)
    dispatch(checking)
  }
  const mydata=useSelector((stae)=>stae.paymentcheckreducer)
  const {checkedvalue}=mydata
  const mydatabacking=useSelector((state)=>state.handlebackreducer)
  const {backing}=mydatabacking
  // console.log(checkedvalue,backing)
  const {name,number,date,cvv,card}=data
  // console.log(data)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
   
      <Grid container spacing={3}>
    
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            name="name"
            onChange={handlechange}

          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          type="number"
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            name="number"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            name="date"
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
    
            type="number"
           maxRows={3}
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            name="cvv"
            onChange={handlechange}
          />
           <SelectField
            required
            id="card"
            // label="Select Card"
     
            fullWidth
            // autoComplete="cc-csc"
            // variant="standard"
            name="card"
            onChange={handlechange}
          >
            
            <option value="">Select Card</option>
            <option value="MasterCard">MaterCard</option>
            <option value="VisaCard">VisaCard</option></SelectField>
        </Grid>
     
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox onChange={handlecheck} disabled={number&&date&&cvv&&name&&card?false:true} color="secondary" name="saveCard" value="yes" />}
            label="check it for further process"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}