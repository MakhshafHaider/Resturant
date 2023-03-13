// import {combineReducers} from "redux";
// import {createStore, applyMiddleware} from "redux";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from 'redux-devtools-extension';
// import { getAllFoodReducer} from './reducers/fastFoodReducers';

// const finalReducer = combineReducers({
//     getAllFoodReducer
// })

// const initialState = {};

// const composeEnhancers = composeWithDevTools({});

// const store =  createStore(finalReducer, initialState,composeEnhancers(applyMiddleware(thunk)));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { getAllFoodReducer } from "./reducers/fastFoodReducers";
import {cartReducer} from "./reducers/CartReducers";

const reducer = {
  getAllFoodReducer,
  cartReducer
};


const middleware = [thunk];

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")):[];
console.log("cartItems", cartItems);
const initialState = { 
   cartReducer : {cartItems: cartItems}
 };

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware,
  devTools: true,
});

export default store;
