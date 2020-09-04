import {combineReducers } from 'redux';
import SignReducer from "./Siginreducer";
import LoginReducer from "./Loginreducer";

const Rootreducer=combineReducers({
    Sigining:SignReducer,
    Logining:LoginReducer
})

export default Rootreducer;