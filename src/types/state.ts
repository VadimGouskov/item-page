import Item from "./item";
import { ItemFilters } from "../ducks/itemFilter";

interface State {
    items: Item[];
    itemFilter: ItemFilters; 
}

export default State;