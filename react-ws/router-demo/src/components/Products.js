import axios from 'axios';
import {useState,useEffect} from 'react';
import Product from './Product';
import { renderMatches } from 'react-router-dom';
const Products=()=>{

    const[products,setProducts]=useState([])

      
    useEffect(()=>{
        const BASE_URL='http://localhost:3004/products'  
        axios.get(BASE_URL)
        .then(response=>setProducts(response.data))
         
    },[])

    const renderProducts=()=>{
        return products.map((prod,idx)=>{
            return(
                    <tr key={idx}>
                      <Product product={prod} />
                    </tr>
                  
            )
        })
    }

    return(

            <div>

                <table className='table table-bordered'>
                        <thead>
                        <tr>

                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>option1</th>
                            <th>option2</th>
                            </tr>
                        </thead>
                   
                    <tbody>
                    {renderProducts()}
                    </tbody>
                </table>
                
              

            </div>

    )

}

export default Products