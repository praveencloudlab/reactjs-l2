import React from 'react';

const Product = (props) => {

    let{prod}=props
    let{id,name,description,price}=prod;

    return (
        <>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{description}</td>
        </>
    );
};

export default Product;