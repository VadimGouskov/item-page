import React, { useEffect } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { addItem, loadItems } from "../ducks/items";
import { bindActionCreators } from "redux";
import ItemType from "../types/item";
import State from "../types/state";
import Filters, { Genders } from "../types/filters";

// COMPONENT
type ItemFeedProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ItemFeed: React.FC<ItemFeedProps> = (props) => {
  useEffect(() => {
    props.loadItems();
  }, [props.loadItems]);

  return (
    <div className="item-container">
      <div className="columns is-multiline">
        {props.filteredItems.map((item: ItemType) => (
          <div key={item.id} className="column is-4" >
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

// METHODS
const getFilteredItems = (items: ItemType[], filters: Filters) => {
  return items.filter((item: ItemType) => {
    // if no filters are selected, display all items
    if (!Object.values(filters.gender).some((filter) => filter === true)) {
      return items;
    }

    // TODO fix this unscalable filtering code
    if (item.gender === Genders.Male && !filters.gender.male) {
      return false;
    } else if (item.gender === Genders.Female && !filters.gender.female) {
      return false;
    } else if (
      item.gender === Genders.Genderless &&
      !filters.gender.genderless
    ) {
      return false;
    } else if (item.gender === Genders.Unknown && !filters.gender.unknown) {
      return false;
    } else {
      return true;
    }
  });
};

// PROP MAPPING
const mapStateToProps = (state: State) => {
  return {
    items: state.items,
    filteredItems: getFilteredItems(state.items.items, state.filters),
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      addItem,
      loadItems,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemFeed);
