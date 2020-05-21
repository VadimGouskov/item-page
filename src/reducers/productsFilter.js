import { ProductFilters } from "../actions";

const productsFilter = (state = ProductFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case 'SET_PRODUCT_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default productsFilter;