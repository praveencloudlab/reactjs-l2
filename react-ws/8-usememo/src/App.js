import React,{useState,useMemo} from 'react';

const App = () => {

  const[number,setNumber]=useState(0);
  const calculateExpensiveValue=useMemo(()=>{
    let result=0;
    // perfom some complex calculations or expensive opeartions
    for(let i=0;i<=number;i++){
      result+=1;
    }
    return result;
  },[number])


  return (
    <div>
      <h1>useMemo Hook</h1> <hr/>

      <h2>Number: {number}</h2>

      <button onClick={()=>setNumber(number+1)}>Increment</button>
      <h2>expensive value: {calculateExpensiveValue}</h2>
      
    </div>
  );
};

export default App;