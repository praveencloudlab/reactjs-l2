import React from 'react';
import C1 from './C1';
import C2 from './C2';

const App = () => {

  let nme='Praveen'
  let date=new Date().toDateString()

  let nums=[10,20,30,40];
  let n1=[...nums,50,60,70];

  let emp={id:1024,name:'Praveen',salary:3846486}

  let person=[
    {
    id:10,
    name:'Ozvitha',
    skills:['Javascript', 'React JS','NodeJS','Redux','Java'],
    address:{
      present:{},
      permanent:{}
    },
    experiences:[
      {'coompan':'X','totalexp':5},
      {'coompan':'Y','totalexp':3},
      {'coompan':'X','totalexp':5}
    ]
  }
  ,
  {
    id:11,
    name:'Prashanth',
    skills:['Javascript', 'React JS','NodeJS','Redux','Java'],
    address:{
      present:{},
      permanent:{}
    },
    experiences:[
      {'coompan':'X','totalexp':5},
      {'coompan':'Y','totalexp':3},
      {'coompan':'X','totalexp':5}
    ]
  }

]

  let{id,name,salary}=emp;

  return (
    <div>
        <h1>Welcome {nme} </h1>
        <h2>{date}</h2>
        <h2>No: {n1}</h2>
        <h2>{JSON.stringify(emp)}</h2>
        <h2>ID: {id}</h2>
        <h2>Name: {name}</h2>
        <h2>Salary: {salary}</h2>

        <C1/>
        <C2/>
       
    </div>
  );
};

export default App;