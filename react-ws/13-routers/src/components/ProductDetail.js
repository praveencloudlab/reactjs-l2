import React from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../api-services/ProductService';
import { useNavigate } from 'react-router-dom';

const ProductDetail = (props) => {
    const navigate=useNavigate();
    let deleteProduct=(id)=>{
        ProductService.deleteProduct(id)
        .then(response=>console.log(response.data))
        navigate('/products');  
    }



    let{product} =props;
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td><Link to={`/addproduct/${product.id}`}><button>Edit</button></Link></td>
            <td><button onClick={()=>deleteProduct(product.id)}>Delete</button></td>
    </tr>
    );
};

export default ProductDetail;