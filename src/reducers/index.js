import { createStore, combineReducers, applyMiddleware } from 'redux'
import items from './items'
import itemsFilter from './itemsFilter'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  items,
  itemsFilter
});

export const initialState = {
    items: ['test', 'best', 'rest', 'chrest']
}

const middleware = [];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;

