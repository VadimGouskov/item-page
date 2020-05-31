import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { updateItemFilter } from '../ducks/itemFilter';
import { loadItemsForRange } from '../ducks/items'
import { toggleMaleFilter, toggleFemaleFilter, toggleUnknownFilter, toggleGenderlessFilter } from '../ducks/filters'
import { connect } from 'react-redux';

import { Button, RangeSlider, NumberRange }from '@blueprintjs/core';
import State from '../types/state';

type ItemFilterProps =
ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


const ItemFilter: React.FC<ItemFilterProps> = (props) => {
    // UI state
    const [slider, setSlider] = useState<NumberRange>([1,10]);
    const changeItemValue = (value: NumberRange) => {
        setSlider(value)
    }
    
    const changeItemFilter = (value: NumberRange) => {
        // range slider exposes values as an array of two values [min, max]
        props.loadItemsForRange(value[0], value[1]);
    }

    return(
        <div className="colums ip-filter-box card">
            <h2 className="is-size-4">Gender</h2>
            <div className="column bp3-button-group bp3-large bp3-fill">
                <Button className="bp3-intent-primary"
                    onClick={props.toggleMaleFilter}
                    outlined={!props.filters.gender.male}
                    >
                    Male
                </Button>
                <Button className="bp3-intent-primary"
                    onClick={props.toggleFemaleFilter}
                    outlined={!props.filters.gender.female}
                    >
                    Female
                </Button>
                <Button className="bp3-intent-primary"
                    onClick={props.toggleGenderlessFilter}
                    outlined={!props.filters.gender.genderless}
                    >
                    Genderless
                </Button>
                <Button className="bp3-intent-primary"
                    onClick={props.toggleUnknownFilter}
                    outlined={!props.filters.gender.unknown}
                    >
                    Unknown
                </Button>
            </div>
            <h2 className="is-size-4">Episodes</h2>
            <div className='column'>
                <RangeSlider
                    min={1}
                    max={35}
                    stepSize={1}
                    labelStepSize={4}
                    onChange={changeItemValue}
                    onRelease={changeItemFilter}
                    value={slider}
                ></RangeSlider>
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
        toggleUnknownFilter,
        toggleGenderlessFilter      
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemFilter);