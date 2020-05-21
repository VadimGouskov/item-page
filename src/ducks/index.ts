import { createStore, combineReducers, applyMiddleware } from 'redux'
import items from './items'
import itemsFilter, { ItemFilters } from './itemFilter'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  items,
  itemsFilter
});

const initialState = {
    items: ['test', 'best', 'rest', 'chrest'],
    itemsFilter: ItemFilters.SHOW_ALL
}

const middleware: any = [];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;

