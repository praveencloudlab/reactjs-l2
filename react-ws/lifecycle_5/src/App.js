import React from 'react';
import {useState} from 'react'

const App = () => {

   let counter=1;
    function increment(a){
        console.log('clicked.. ')
        counter=counter+1
        console.log(counter)
    }

    const[count,setCount]=useState(1)
    const[name,setName]=useState('')

    function changeName(e){
        let s1=e.target.value;
        setName(s1)
    }


    return (
        <div>
          <h1>Life Cycle methods</h1> <hr/>
            <div>
                <h1>{counter}</h1>
            </div>

            <div>
                <h1>{count}</h1>
            </div>

            <div>
                <h1>Name: {name}</h1>
            </div>

            <button onClick={()=>increment()}>Click Me</button>
            <br/>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <hr/>
            <input onChange={(e)=>changeName(e)}/>
        </div>
    );
};

export default App;