import React from 'react';

interface ProductProps {
    name: string;
}

const Product: React.FC<ProductProps> = (props) => {
    return (
        <h1>PRODUCT {props.name}</h1> 
    )
}


export default Product;