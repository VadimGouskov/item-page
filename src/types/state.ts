import Item from "./item";
import { ItemFilters } from "../ducks/itemFilter";
import Filters from "./filters";

interface State {
    items: Items;
    itemFilter: ItemFilters; // TODO CLEAN UP UNUSED FILTERS
    filters: Filters;
}

export interface Items {
    items: Item[];
    pending: boolean;
    error: any;
}
export default State;