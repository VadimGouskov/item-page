const addProduct = (name: any) => ({
  type: 'ADD_PRODUCT',
  name: name,
})

const setProductFilter = (filter: any) => ({
  type: 'SET_PRODUCT_FILTER',
  filter: filter,
})

export enum ProductFilters {
  SHOW_ALL,
  SHOW_THREE,
}


export default addProduct;
export { setProductFilter };