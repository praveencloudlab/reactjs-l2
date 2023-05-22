import React,{useState} from 'react';
import Greet from './components/Greet';

const App = () => {

  const[greetMsg,setGreetMsg] =useState('default greeetings')
  const[childMsg,setChildMsg] =useState('')


  function getDataFormChild(msg){
    setChildMsg(msg)
  }

  

  return (
    <div>
      <h1>APP Component</h1> <hr/>

      <button onClick={()=>setGreetMsg('Good Morning!')}>Good Morning</button>
      <button onClick={()=>setGreetMsg('Good Noon!')}>Good Noon</button>
      <button onClick={()=>setGreetMsg('Good Evening!')}>Good Evening</button>
      <button onClick={()=>setGreetMsg('')}>Cancel</button>
      <br/>
      <h2>child message: {childMsg}</h2>



      <hr/>
      {greetMsg?<Greet message={greetMsg} onAction={getDataFormChild} />:null}
      
  
    </div>
  );
};

export default App;