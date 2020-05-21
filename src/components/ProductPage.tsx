import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import products from '../reducers/products';
import addProduct, { ProductFilters } from '../actions'
import { bindActionCreators } from 'redux';

// COMPONENT
type ProductPageProps = 
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ProductPage: React.FC<ProductPageProps> = (props) => {
  return (
    <div>
        { props.filteredProducts.map((product: any) => (
            // eslint-disable-next-line react/jsx-key
            <Product name={product}/> 
        )) }
        <button onClick={() => props.addProduct('test')}>ADD</button>
    </div>
  )
}

// METHODS 
const getFilteredProducts = (products: any, filter: ProductFilters) => {
  switch(filter) {
    case ProductFilters.SHOW_ALL:
      return products;
    case ProductFilters.SHOW_THREE:
      return products.slice(0, 4);
    default:
       return products;
  }
}

// PROP MAPPING
const mapStateToProps = (state: any) => {
  return {
    products: products(state.products, {}),
    filteredProducts: getFilteredProducts(state.products, state.productsFilter),
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ addProduct }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
