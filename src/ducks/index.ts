import { createStore, combineReducers, applyMiddleware } from 'redux'
import items from './items'
import itemFilter, { ItemFilters } from './itemFilter'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  items: items,
  itemFilter: itemFilter
});

const initialState = {
    items: [{
      id: "iD",
      title: "TITLE",
      subtitle: "SUBTITLE",
      description: "DESCRIPTION",
    }],
    itemFilter: ItemFilters.SHOW_ALL
}

const middleware: any = [];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
export { initialState };

