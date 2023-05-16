//import  // es6 modules
//required // common js module
// functions..

function f1(){
    console.log("Hello world!");
}

let f2 = function(){
    console.log("Its f2 function again!");
}
//let f2=()=>console.log("Its f2 function");

//f1()
//f2()


let sayTime = ()=>{
    let time=new Date().toLocaleTimeString("en-US");
    let template=`
        <div>
            <h2>Time</h2>
            <hr/>
            <h3>Time: ${time}</h3>
        </div>
        `
    
   return template
}

//document.querySelector("#pt").innerHTML=sayTime()

//function m1(){'welcome to m1 function'}
//function m1(x){console.log('x is',x);}

//m1()

function teach(){
    console.log('teaching js');
    function task(){
        console.log('doing task on js');
    }

    function learn(){
        console.log('learning js');
    }
  

   // return {'obj1':task, 'obj2':learn}
    return{task,learn}
} // when parent context is closed, then all the children context also gets closed

//teach()
//teach()
//teach()

 //let funObj=teach();
 //l1()
 //l1()
 //l1()
 //funObj.learn()
 //funObj.task()
 //funObj.task()
 //funObj.task()
 //funObj.learn()


 let{task,learn}=teach();

 learn()
learn()
 task()
 task()
 task()

 




