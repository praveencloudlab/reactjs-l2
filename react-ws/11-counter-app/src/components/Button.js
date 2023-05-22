import React,{useState} from 'react';

const Button = ({btnLabel}) => {
    const[counter,setCounter] = useState(0)

    return (
        <div>
            <h2 className='text-center card-body'>{counter}</h2>
            <hr/>
            <button onClick={()=>setCounter(counter+1)}>{btnLabel}</button>
            
        </div>
    );
};

export default Button;