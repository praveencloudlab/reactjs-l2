import React from 'react';
import Product from './components/Product';

const App = () => {

  let products=[
    {id:1024,name:'SSC Book',price:1245,description:'Good book on banking infirmation'},
    {id:1025,name:'java Script',price:765,description:'JS code for ES6'},
    {id:1026,name:'Spring Boot',price:3000,description:'coverage of spring-boot 3.0.x'},
    {id:1027,name:'OAuth 2.0',price:1356,description:'Both SSO and OAuth 2.0'},
    {id:1028,name:'Spring security',price:7489,description:'Form based and auth based security'},
  ]


  const renderProducts =()=>{
    return products.map((product, index)=>{
      return(
        <tr>
            <Product prod={product}/>
        </tr>
      )
    })
  }

  //let productPrice=100;

  //let product={id:1024,name:'SSC Book',price:1245,description:'Good book on banking infirmation'}

  return (
    <div>

      <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
         
        </tr>
        </thead>

        <tbody>
          {renderProducts()}
        </tbody>

      </table>

     
      
    </div>
  );
};

export default App;