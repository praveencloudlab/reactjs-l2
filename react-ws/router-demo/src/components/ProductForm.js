import {useForm} from 'react-hook-form'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm=()=>{

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate=useNavigate();


    const onSubmit = (data) => {

       
        const BASE_URL='http://localhost:3004/products'  

        axios.post(BASE_URL,data)
        .then(response=>{
            console.log(response.data);
            navigate('/products'); 
           
        })
        .catch(error=>{
            console.log("error occured");
        })

        navigate('/products'); 

    }


    return(
        <div>
            <h1>ProductForm</h1>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Product ID</label>
                        <input name="id" {...register('id',{required:true})}/>
                        {errors.id?.type === 'required' && <p role="alert">Product id is required</p>}

                    </div>

                    <div>
                        <label>Product Name</label>
                        <input name="name" {...register('name',{required:true,minLength: 3})}/>
                        {errors.name?.type === 'required' && <p role="alert">Product Name is required</p>}
                        {errors.name?.type === 'minLength' && <p role="alert">Product name should be minimum 3 characters long</p>}
                    </div>

                    <div>
                        <label>Price</label>
                        <input name="price" {...register('price',{required:true})}/>
                        {errors.price?.type === 'required' && <p role="alert">Price is required</p>}

                    </div>

                    <div>
                        <label>Product Description</label>
                        <textarea name="description" {...register('description')}/>
                    </div>

                    <div>
                        <button>Save</button>
                    </div>
                </form>
                
            </div>
        </div>

    )

}

export default ProductForm