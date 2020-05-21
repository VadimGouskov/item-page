
const items = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [
          ...state,
          action.name
        ]
      default:
        return state
    }
}

export default items;
