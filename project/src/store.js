import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { legacy_createStore } from "redux";
import {reducer as primerproduct} from "./Reducer/Productsprimer/reducer"
import { reducer as signupreducer } from "./Reducer/signup/Reducer";
import {reducer as singleproductreducer} from "./Reducer/SingleProduct/Reducer"
import {reducer as loginreducer} from "./Reducer/Login/reducer"
import {reducer as cartdatareducer} from "./Reducer/CartReducer/Reducer"
import {reducer as deletereducer} from "./Reducer/Deletesingleproduct/Reducer"
import {reducer as updatequantity} from "./Reducer/Updatequantity/Reducer"
import {reducer as addtocartreducer} from "./Reducer/AddToCardReducer/Reducer"
import {reducer as paymentcheckreducer} from "./Reducer/PaymentCheckReducer/Reducer"
import {reducer as paymentmethodreducer} from "./Reducer/PaymentCheckReducer/Paymentmethod/Reducer"
import {reducer as handlebackreducer} from "./Reducer/PaymentCheckReducer/HandlebackReducer/Reducer"

import {reducer as storeddatareducer} from "./Reducer/PaymentCheckReducer/StorePaymentData/Reducer"
import {reducer as addressreducer} from "./Reducer/Addressreducer/Reducer"
import thunk from 'redux-thunk'
const rootreducer=combineReducers({signupreducer,primerproduct,singleproductreducer,loginreducer,cartdatareducer,deletereducer,updatequantity,addtocartreducer,paymentcheckreducer,paymentmethodreducer,handlebackreducer,
storeddatareducer,addressreducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))