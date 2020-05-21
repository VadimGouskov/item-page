import React from 'react';
import { bindActionCreators } from 'redux';
import { updateItemFilter, ItemFilters } from '../ducks/itemFilter';
import { connect } from 'react-redux';

type ItemFilterProps =
ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


const ItemFilter: React.FC<ItemFilterProps> = (props) => {
    return(
        <div>
            ITEM FILTER
            <button onClick={() => props.updateItemFilter(ItemFilters.SHOW_ALL)}>All items</button>
            <button onClick={() => props.updateItemFilter(ItemFilters.SHOW_THREE)}>Three items</button>
        </div>
    );
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ updateItemFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemFilter);