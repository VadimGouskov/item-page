import React, { useEffect } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { addItem, loadItems } from '../ducks/items';
import { bindActionCreators } from 'redux';
import ItemType from '../types/item';
import State from '../types/state';
import Filters, { Genders } from '../types/filters';

// COMPONENT
type ItemPageProps = 
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ItemPage: React.FC<ItemPageProps> = (props) => {

  useEffect(() => {
    props.loadItems();
  }, [props.loadItems])

  return (
    <div>
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
    imgUrl: "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    gender: 'male',
  }
}

// METHODS 
const getFilteredItems = (items: ItemType[], filters: Filters) => {
  return items.filter((item: ItemType) => { 
    // TODO fix this unscalable filtering code
    if(item.gender == Genders.Male && !filters.gender.male) {
      return false;
    } else if(item.gender == Genders.Female && !filters.gender.female) {
      return false;
    } else if(item.gender == Genders.Genderless && !filters.gender.genderless) {
      return false;
    } else if(item.gender == Genders.Unknown && !filters.gender.unknown) {
      return false;
    } else {
      return true
    }
  })
}

// PROP MAPPING
const mapStateToProps = (state: State) => {
  return {
    items: state.items,
    filteredItems: getFilteredItems(state.items.items, state.filters),
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ 
        addItem,
        loadItems, 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
