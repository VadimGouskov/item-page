import { createStore, combineReducers, applyMiddleware } from 'redux'
import products from './products'
import productsFilter from './productsFilter'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  products,
  productsFilter
});

export const initialState = {
    products: ['test', 'best', 'rest', 'chrest']
}

const middleware = [];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;

