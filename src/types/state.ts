import Item from "./item";
import { ItemFilters } from "../ducks/itemFilter";

interface State {
    items: Items;
    itemFilter: ItemFilters; 
}

export interface Items {
    items: Item[];
    pending: boolean;
    error: any;
}
export default State;