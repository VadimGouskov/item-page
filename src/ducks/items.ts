
const ADD = 'item-page/items/ADD'

const items = (state = ['INITIALSTATE'], action: any) => {
    switch (action.type) {
      case ADD:
        return [
          ...state,
          action.payload
        ]
      default:
        return state
    }
}

const addItem = (item: any) => ({
  type: ADD,
  payload: item,
})

export default items;
export { addItem }
