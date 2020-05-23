import Item from "../types/item"
const ADD = 'item-page/items/ADD'

const items = (state = [] as Item[], action: ReturnType<typeof addItem> | undefined) => {
    switch (action!.type) {
      case ADD:
        return [
          ...state,
          action!.payload
        ]
      default:
        return state
    }
}

const addItem = (item: Item) => ({
  type: ADD,
  payload: item,
})

export default items;
export { addItem }
