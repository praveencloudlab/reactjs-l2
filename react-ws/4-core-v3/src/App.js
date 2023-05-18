import React from 'react';

const App = () => {
  let name='Praveen'

  const sayName =()=>name;
  const updateName=()=>{
    name=name+" Reddy"
    console.log('Name: '+name);
    return name
  }



  return (
    <div>
      <h1>App Component</h1> <hr/>
      <h2>Name: {sayName()}</h2>
      <h2>Name: {updateName()}</h2>

    </div>
  );
};

export default App;