import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import items from '../reducers/items';
import addItem, { ItemFilters } from '../actions'
import { bindActionCreators } from 'redux';

// COMPONENT
type ItemPageProps = 
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ItemPage: React.FC<ItemPageProps> = (props) => {
  return (
    <div>
        { props.filteredItems.map((item: any) => (
            // eslint-disable-next-line react/jsx-key
            <Item name={item}/> 
        )) }
        <button onClick={() => props.addItem('test')}>ADD</button>
    </div>
  )
}

// METHODS 
const getFilteredItems = (items: any, filter: ItemFilters) => {
  switch(filter) {
    case ItemFilters.SHOW_ALL:
      return items;
    case ItemFilters.SHOW_THREE:
      return items.slice(0, 4);
    default:
       return items;
  }
}

// PROP MAPPING
const mapStateToProps = (state: any) => {
  return {
    items: items(state.items, {}),
    filteredItems: getFilteredItems(state.items, state.itemsFilter),
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
