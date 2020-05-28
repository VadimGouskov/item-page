import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { updateItemFilter, ItemFilters } from '../ducks/itemFilter';
import { loadItemsForRange } from '../ducks/items'
import { connect } from 'react-redux';

import { Slider }from '@blueprintjs/core';

type ItemFilterProps =
ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


const ItemFilter: React.FC<ItemFilterProps> = (props) => {
    // UI state
    const [slider, setSlider] = useState<number>(5);
    const changeItemValue = (value: number) => {
        setSlider(value)
    }
    
    const changeItemFilter = (value: number) => {
        props.loadItemsForRange(0, value);
    }

    return(
        <div className="columns">
            ITEM FILTER
            <button onClick={() => props.updateItemFilter(ItemFilters.SHOW_ALL)}>All items</button>
            <button onClick={() => props.updateItemFilter(ItemFilters.SHOW_THREE)}>Three items</button>
            <div className='column is-4'>
                <Slider
                    min={0}
                    max={10}
                    stepSize={1}
                    onChange={changeItemValue}
                    onRelease={changeItemFilter}
                    value={slider}
                ></Slider>
            </div>
        </div>
    );
}





const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ 
        updateItemFilter,
        loadItemsForRange
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemFilter);