import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { addItem } from '../ducks/items';
import { bindActionCreators } from 'redux';
import ItemType from '../types/item';
import State from '../types/state';
import { ItemFilters } from '../ducks/itemFilter';

// COMPONENT
type ItemPageProps = 
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ItemPage: React.FC<ItemPageProps> = (props) => {
  return (
    <div>
        { props.filteredItems.map((item: ItemType) => (
            // eslint-disable-next-line react/jsx-key
            <Item key={item.id} name={item.title}/> 
        )) }
        <button onClick={() => props.addItem(getTestItem())}>ADD</button>
    </div>
  )
}

const getTestItem = (): ItemType => {
  return {
    id: (Math.random()*10000).toString(),
    title: "TITLE",
    subtitle: "SUBTITLE",
    description: "DESCRIPTION",
  }
}

// METHODS 
const getFilteredItems = (items: ItemType[], filter: ItemFilters) => {
  switch(filter) {
    case ItemFilters.SHOW_ALL:
      return items;
    case ItemFilters.SHOW_THREE:
      return items.slice(0, 3);
    default:
       return items;
  }
}

// PROP MAPPING
const mapStateToProps = (state: State) => {
  return {
    items: state.items,
    filteredItems: getFilteredItems(state.items, state.itemFilter),
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
