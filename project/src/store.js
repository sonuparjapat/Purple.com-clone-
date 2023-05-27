import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { legacy_createStore } from "redux";
import {reducer as primerproduct} from "./Reducer/Productsprimer/reducer"
import { reducer as signupreducer } from "./Reducer/signup/Reducer";
import {reducer as singleproductreducer} from "./Reducer/SingleProduct/Reducer"
import {reducer as loginreducer} from "./Reducer/Login/reducer"
import {reducer as cartdatareducer} from "./Reducer/CartReducer/Reducer"
import thunk from 'redux-thunk'
const rootreducer=combineReducers({signupreducer,primerproduct,singleproductreducer,loginreducer,cartdatareducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))