import { createStore, combineReducers, applyMiddleware } from 'redux'
import items from './items'
import itemFilter, { ItemFilters } from './itemFilter'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import filters from './filters';

const rootReducer = combineReducers({
  items,
  itemFilter,
  filters,
});

const initialState = {
    items: {
      pending: false,
      error: {},
      items: []},
    itemFilter: ItemFilters.SHOW_ALL,
    filters: {
      male: true,
      female: true,
      unknown: true,
    }
}

const middleware: any = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
export { initialState };

