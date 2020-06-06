import React from 'react';
import ItemPage from './ItemFeed';
import FeedStatus from './FeedStatus';


const MainSection: React.FC<{}> = () => {
    return ( 
        <div className="container">
            <FeedStatus/>
            <ItemPage/>
        </div>
        
    )
}

export default MainSection;