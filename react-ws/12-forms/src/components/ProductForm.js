import React from 'react';
import {useForm} from 'react-hook-form'

const ProductForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(">>>>");
            console.log(data);
    }


    return (
        <div>
            <h1>ProductForm</h1>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Product ID</label>
                        <input name="productId" {...register('productId',{required:true})}/>
                        {errors.productId?.type === 'required' && <p role="alert">Product id is required</p>}

                    </div>

                    <div>
                        <label>Product Name</label>
                        <input name="productname" {...register('productName',{required:true,minLength: 3})}/>
                        {errors.productName?.type === 'required' && <p role="alert">Product Name is required</p>}
                        {errors.productName?.type === 'minLength' && <p role="alert">Product name should be minimum 3 characters long</p>}
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
    );
};

export default ProductForm;