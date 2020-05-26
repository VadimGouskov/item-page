import { createStore, combineReducers, applyMiddleware } from 'redux'
import items from './items'
import itemFilter, { ItemFilters } from './itemFilter'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  items: items,
  itemFilter: itemFilter
});

const initialState = {
    items: {
      pending: false,
      error: {},
      items: [{
        id: "ID",
        title: "TITLE",
        subtitle: "SUBTITLE",
        description: "DESCRIPTION",
        imgUrl:""
      }
    ]},
    itemFilter: ItemFilters.SHOW_ALL
}

const middleware: any = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
export { initialState };

