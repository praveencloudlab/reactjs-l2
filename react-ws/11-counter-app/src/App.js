import React,{useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import Button from './components/Button';

const App = () => {

  let nums=[10,20,5,-10,-5,-10]

  const[hits,setHits] =useState(0)

  const renderButtons=()=>{
    return nums.map((num,idx)=>{
      return(
       <div key={idx} className='col-4 text-center mt-3 card'>
          <Button btnLabel={num}></Button>
       </div>


      )
    })
  }

  return (
    <div className='container'>
      <h1>Counter APP</h1>
      <hr/>

      <div className='row'>
       <div className='card'>
        <div className='card-body'>
        {renderButtons()}
        </div>
       </div>
      
     

      </div>
     

    </div>
  );
};

export default App;