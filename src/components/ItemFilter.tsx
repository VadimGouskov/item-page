import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { updateItemFilter, ItemFilters } from '../ducks/itemFilter';
import { connect } from 'react-redux';

import { Slider }from '@blueprintjs/core';

type ItemFilterProps =
ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


const ItemFilter: React.FC<ItemFilterProps> = (props) => {
    const [slider, setSlider] = useState(5);

    const changeItemValue = (value: number) => {
        setSlider(value)
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

const changeItemFilter = (value: number) => {
    console.log(value);
}



const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ updateItemFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemFilter);