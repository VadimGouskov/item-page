import React from 'react';
import ItemType from '../types/item';

interface ItemProps {
    item: ItemType;
}

const Item: React.FC<ItemProps> = (props) => {
    return (
        <div>
            <img src={props.item.imgUrl} alt={`image of ${props.item.title}`}/>
            <h1> {props.item.title}</h1> 
            <h2> {props.item.subtitle}</h2>
            <p> {props.item.description}</p>
        </div>
    )
}


export default Item;