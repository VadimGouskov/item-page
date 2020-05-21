import React from 'react';

interface ItemProps {
    name: string;
}

const Item: React.FC<ItemProps> = (props) => {
    return (
        <h1>ITEM {props.name}</h1> 
    )
}


export default Item;