import React from 'react';
import ItemType from '../types/item';

interface ItemProps {
    item: ItemType;
}

const Item: React.FC<ItemProps> = (props) => {
    return (
        <div className="card has-margin-20">
            <div className="card-image has-padding-10">
                <figure className="image is-3by3 ">
                    <img src={props.item.imgUrl} alt={`image of ${props.item.title}`}></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.item.title}</p>
                        <p className="subtitle is-6">{props.item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;