const UPDATE = 'item-page/itemFilter/UPDATE'

const itemFilter = (state = ItemFilters.SHOW_ALL, action: ReturnType<typeof updateItemFilter>) => {
    switch(action.type) {
        case UPDATE:
            return action.payload;
        default:
            return state;
    }
}

const updateItemFilter = (filter: ItemFilters) => ({
    type: UPDATE,
    payload: filter,
})

enum ItemFilters {
    SHOW_ALL,
    SHOW_THREE,
}

export default itemFilter;
export { updateItemFilter, ItemFilters };