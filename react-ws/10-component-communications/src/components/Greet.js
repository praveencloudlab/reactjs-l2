import React from 'react';

const Greet = (props) => {
    let{message,onAction} = props;

    return (
        <div>

            <h1>Greet Component</h1> <hr/>
            <h2>greetings: {message} </h2>

            <button onClick={()=>onAction(message+' too!')}>Greet Back</button>
            
        </div>
    );
};

export default Greet;