const addItem = (name: any) => ({
  type: 'ADD_ITEM',
  name: name,
})

const setItemFilter = (filter: any) => ({
  type: 'SET_ITEM_FILTER',
  filter: filter,
})

export enum ItemFilters {
  SHOW_ALL,
  SHOW_THREE,
}


export default addItem;
export { setItemFilter };