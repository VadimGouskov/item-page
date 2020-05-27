import React, { useEffect } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { addItem, loadItems } from '../ducks/items';
import { bindActionCreators } from 'redux';
import ItemType from '../types/item';
import State from '../types/state';
import { ItemFilters } from '../ducks/itemFilter';

// COMPONENT
type ItemPageProps = 
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ItemPage: React.FC<ItemPageProps> = (props) => {

  useEffect(() => {
    props.loadItems();
  }, [props.loadItems])

  return (
    <div className='container'>
        <div className='columns is-multiline'>
            { props.filteredItems.map((item: ItemType) => (
                <div key={item.id} className='column is-4'>
                    <Item  item={item}/>
                </div> 
            )) }
        </div>
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
    imgUrl: "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
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
    filteredItems: getFilteredItems(state.items.items, state.itemFilter),
  }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ 
        addItem,
        loadItems, 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
