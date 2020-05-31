import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { updateItemFilter } from '../ducks/itemFilter';
import { loadItemsForRange } from '../ducks/items'
import { toggleMaleFilter, toggleFemaleFilter, toggleUnknownFilter } from '../ducks/filters'
import { connect } from 'react-redux';

import { Slider, Button }from '@blueprintjs/core';
import State from '../types/state';

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
        props.loadItemsForRange(1, value);
    }

    return(
        <div className="colums">
            <div className="column is-8">
                <Button className="bp3-intent-primary"
                    onClick={props.toggleMaleFilter}
                    outlined={!props.filters.male}
                    >
                    Male
                </Button>
                <Button className="bp3-intent-primary"
                    onClick={props.toggleFemaleFilter}
                    outlined={!props.filters.female}
                    >
                    Female
                </Button>
                <Button className="bp3-intent-primary"
                    onClick={props.toggleUnknownFilter}
                    outlined={!props.filters.unknown}
                    >
                    Unknown
                </Button>
            </div>
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


const mapStateToProps = (state: State) => {
    return {
        filters: state.filters
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ 
        updateItemFilter,
        loadItemsForRange,
        toggleMaleFilter,
        toggleFemaleFilter,  
        toggleUnknownFilter      
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemFilter);