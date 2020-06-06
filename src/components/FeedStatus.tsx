import React from 'react';
import { bindActionCreators } from 'redux';
import State from '../types/state';
import { Spinner, Intent } from '@blueprintjs/core';
import { connect } from 'react-redux';

type FeedStatusProps =
ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>

const FeedStatus: React.FC<FeedStatusProps> = (props) => {
    return (
        <div className="columns">
            <div className="column is-2 has-padding-left-40">
                {/* total: */}
            </div>
            <div className="column">
                {props.pending && 
                    <Spinner
                        intent={Intent.PRIMARY}
                    />
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return {
        pending: state.items.pending
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedStatus);