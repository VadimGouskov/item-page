import React from 'react';
import { bindActionCreators } from 'redux';
import { setProductFilter, ProductFilters } from '../actions';
import { connect } from 'react-redux';

type ProductFilterProps =
ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


const ProductFilter: React.FC<ProductFilterProps> = (props) => {
    return(
        <div>
            PRODUCT FILTER
            <button onClick={() => props.setProductFilter(ProductFilters.SHOW_ALL)}>All products</button>
            <button onClick={() => props.setProductFilter(ProductFilters.SHOW_THREE)}>Three products</button>
        </div>
    );
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ setProductFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);