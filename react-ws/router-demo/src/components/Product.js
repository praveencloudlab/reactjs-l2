const Product=({product})=>{

    return(
       
        <>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>Edit</td>
            <td>Delete</td>
        </>
    )

}

export default Product