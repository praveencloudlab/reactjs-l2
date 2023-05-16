let indianTime=document.getElementById("indianTime");
let dubaiTime=document.getElementById("dubaiTime");
let americanTime=document.getElementById("americanTime");

let indianTimev1=document.getElementById("indianTimev1");
let dubaiTimev1=document.getElementById("dubaiTimev1");
let americanTimev1=document.getElementById("americanTimev1");

 function jsClock(props){

    let time=new Date().toLocaleTimeString('en-US',{timeZone:props.timeZone});

    let template=`
    <div class='card'>
        <div class='card-header'>${props.timeZone}</div>
        <div class='card-body'>
            <p>${time} <p>
        </div>
    </div
    
    `
    return template;
    
 }

 function reactClock(props){
    let time=new Date().toLocaleTimeString('en-US',{timeZone:props.timeZone});
    return  <div class='card'>
             <div class='card-header'>{props.timeZone}</div>
                <div class='card-body'>
                    <p>{time} </p>
                 </div>
            </div>
    
 }


 

 setInterval(()=>{
indianTime.innerHTML= jsClock({timeZone:'asia/kolkata'})
dubaiTime.innerHTML= jsClock({timeZone:'asia/dubai'})
americanTime.innerHTML= jsClock({timeZone:'america/new_york'})

ReactDOM.render(reactClock({timeZone:'asia/kolkata'}),indianTimev1);
ReactDOM.render(reactClock({timeZone:'asia/dubai'}),dubaiTimev1);
ReactDOM.render(reactClock({timeZone:'america/new_york'}),americanTimev1);
 
},1000)

