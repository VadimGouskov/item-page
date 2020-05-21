import { ItemFilters } from "../actions";

const itemsFilter = (state = ItemFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case 'SET_ITEM_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default itemsFilter;