
const products = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return [
          ...state,
          action.name
        ]
      default:
        return state
    }
}

export default products;
