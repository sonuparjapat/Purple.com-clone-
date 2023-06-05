import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { usercarddata } from '../../Reducer/CartReducer/Action';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];


export default function Review() {
  const mydata=useSelector((state)=>state.storeddatareducer)
  const {storeddata}=mydata

  const payments = [
    { name: 'Card type', detail: storeddata.card },
    { name: 'Card holder', detail:storeddata.name },
    { name: 'Card number', detail:storeddata.number },
    { name: 'Expiry date', detail: storeddata.date },
  ];


  const dispatch=useDispatch()
  const cart=useSelector((state)=>state.cartdatareducer)
  const logindata=useSelector((state)=>state.loginreducer)
  const {username,token}=logindata
  useEffect(()=>{
  dispatch(usercarddata(token))
  },[])
  const {isLoading,isError,data,sum,sumafterdiscount,savings}=cart
const useraddressdata=useSelector((state)=>
{
  return state.addressreducer
})
const {userdata}=useraddressdata
// console.log(userdata)


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {data&&typeof data!=="undefined"&&data.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.type} secondary={product.desc} />
            <Typography variant="body2">Rs.{Math.ceil(Number(product["product-price"])*Number(product.quantity)-(Number(product["product-price"])*Number(product.quantity))*(Number(product["product-discountPercentage"])/100))}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
        Rs.{sumafterdiscount&&sumafterdiscount+50}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Name:{typeof userdata!=="undefined"&&userdata.firstName&&`${userdata.firstName} ${userdata.lastName&&userdata.lastName}`}</Typography>
          <Typography gutterBottom>Address:{typeof userdata!=="undefined"&&userdata.address1
&&userdata.address1
}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}