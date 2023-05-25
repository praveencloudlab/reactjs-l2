import { Link, Route, Routes } from 'react-router-dom';
import Products from './Products';
import ProductForm from './ProductForm';
const Home=()=>{

    return(
        
        <div>

            <div className="row">

                <div className="col-3">

                  <Link to={"products"}>View Products</Link> <br/>
                   <Link to={"addproduct"}>Add Products</Link> <br/>


                </div>

                <div className="col-9">

                <Routes>

<Route path='products' element={<Products/>} />
<Route path='addproduct' element={<ProductForm/>} />
<Route path='addproduct/:productId' element={<ProductForm/>} />


</Routes>

                </div>

            </div>

        </div>
    )

}

export default Home