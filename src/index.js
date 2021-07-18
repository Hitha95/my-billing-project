import React from 'react';
import ReactDOM from 'react-dom';
import  './css/index.css';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom' 
import App from './App';
import store from './redux/store/store.js'
import {asyncGetAllCustomer} from './redux/actions/customersAction'
import { asyncGetAllProducts } from  './redux/actions/productsAction'

store.subscribe(()=>{
  console.log('state updated', store.getState())
})

const token = localStorage.getItem('token')
console.log(store.getState())

store.dispatch(asyncGetAllProducts(token))

ReactDOM.render( 
 <Provider store={store}>
   <BrowserRouter>
      <App />
   </BrowserRouter>   
 </Provider> ,
  document.getElementById('root')
);