import React,{useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import Button from './components/Button';

const App = () => {

  let nums=[10,20,5,-10,-5,-10]

  const[totalCount,setTotalCount] =useState(0)
  const[resetClicks,setResetClicks]=useState(0)

  const handleBtnResetClicks=()=>{
    setResetClicks(resetClicks+1) // for state update (if statte changes, then child count values rerenderred)
    setTotalCount(0)

  }

  function calculateTotalHitsCount(btnLabel){
    setTotalCount(totalCount+btnLabel)
  }

  const renderButtons=()=>{
    return nums.map((num,idx)=>{
      return(
       <div key={idx} className='col-4 text-center mt-3'>
          <Button resetClicks={resetClicks} onAction={calculateTotalHitsCount} btnLabel={num}></Button>
       </div>


      )
    })
  }



  return (
    <div className='container'>
      <hr/>
      
       <div className='card'>
        <div className='card-header'> <h2>Counter APP</h2> </div>
        <div className='card-body'>
        <div className='card-text'>
        <div className='text-center'>
        <button onClick={handleBtnResetClicks}>Reset All</button>
        </div>
       
        <div className='row'>
        {renderButtons()}
        </div>
        
        </div>
        </div>
        </div>
      <div className='card-footer text-center'>
        <h1>Total: {totalCount}</h1>
      </div>
      </div>


     

  );
};

export default App;