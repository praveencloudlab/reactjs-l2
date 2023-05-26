import React,{useEffect,useState} from 'react';
import ProductService from '../api-services/ProductService';
import ProductDetail from './ProductDetail';


const ProductList = () => {

    const[products,setProducts]=useState([]);

    useEffect(()=>{
        ProductService.getProducts()
        .then(response=>setProducts(response.data))
        .catch(error=>console.log(error))
    },[])

    let renderProducts=()=>{
        return products.map((product)=>{
            return(
             <ProductDetail product={product} key={product.id}/>
            )
        });

    }
    return (
        <div>
            <h1>Product List</h1> <hr/>
            <table className='table table-hover'>
                <tbody>
                {renderProducts()}
                </tbody>
            </table>
            

        </div>
    );
};

export default ProductList;