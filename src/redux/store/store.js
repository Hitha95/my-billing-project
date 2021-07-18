import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { usersReducer, tokenReducer } from '../reducers/usersReducer';
import { customersReducer } from '../reducers/customersReducer';
import { productsReducer } from '../reducers/productsReducer';

const store = createStore(combineReducers({
    allUsers : usersReducer,
    allCustomers : customersReducer,
    allProducts : productsReducer,
    //allProductsTest :allProductsReducer,
    token: tokenReducer,
}), composeWithDevTools(applyMiddleware(thunk)))

export default store