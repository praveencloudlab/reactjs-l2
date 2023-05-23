import React,{useState,useEffect} from 'react';

const Button = ({btnLabel,onAction,resetClicks}) => {
    const[btnHits,setBtnHits] = useState(0)

    const handleBtnHitsCount=()=>{
        setBtnHits(btnHits+1)
        onAction(btnLabel)
    }


    useEffect(()=>{
        // reset child hitcount value whenever the resetcount prop value changes
        setBtnHits(0)
    },[resetClicks])
   
    



    return (
        <div className='text-center card  card-body'>
            <h2>{btnHits}</h2>
            <hr/>
            <button onClick={()=>handleBtnHitsCount()}>{btnLabel}</button>
            
        </div>
    );
};

export default Button;