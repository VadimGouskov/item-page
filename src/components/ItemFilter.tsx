import React from 'react';
import { bindActionCreators } from 'redux';
import { setItemFilter, ItemFilters } from '../actions';
import { connect } from 'react-redux';

type ItemFilterProps =
ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


const ItemFilter: React.FC<ItemFilterProps> = (props) => {
    return(
        <div>
            ITEM FILTER
            <button onClick={() => props.setItemFilter(ItemFilters.SHOW_ALL)}>All items</button>
            <button onClick={() => props.setItemFilter(ItemFilters.SHOW_THREE)}>Three items</button>
        </div>
    );
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ setItemFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemFilter);