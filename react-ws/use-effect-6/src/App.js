import React from 'react';
import {useState,useEffect} from "react";

const App = () => {

    const[counter,setCounter]=useState(1)
    const [even,setEven]=useState(0)
    const [odd,setOdd]=useState(1)

    useEffect(()=>{
        console.log('All:updating.... ')
    })

    useEffect(()=>{
        console.log('counter update')
    },[counter])

    useEffect(()=>{
        console.log("blank array")
    },[])

  const handleIncrement=()=>{
        setCounter(counter+1)
  }
  const handleDecrement=()=>{
        if(counter>0){
            setCounter(counter - 1)
        }
  }


    return (
        <div>
          <h1>Hooks</h1> <hr/>
            <h2>Counter: {counter}</h2>
            <h2>Even: {even}</h2>
            <h2>Odd: {odd}</h2>

            <hr/>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={()=>setEven((even+2))}>Even</button>
            <button onClick={()=>setOdd((odd+2))}>Odd</button>
          
        </div>
    );
};

export default App;