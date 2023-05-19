import React,{useState} from 'react';

const TodoApp = () => {
    const[todos,setTodos]=useState([])
    const[inputValue,setInputValue]=useState('')

    function handleInputChange(e) {
        setInputValue(e.target.value)
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        if(inputValue)
        setTodos([...todos,inputValue])
        setInputValue('')

    }

    function handleDelete(idx) {
        setTodos(todos.filter((t,i)=>i!==idx))
    }

    const renderAllTodos=()=>{
        return todos.map((todo,idx)=>{
            return(
                <li>{todo}
                      -  <button onClick={()=>handleDelete(idx)}>Remove</button>
                </li>

            )
        })
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleInputChange}/>
                <button>Add</button>
                {renderAllTodos()}
            </form>

            
        </div>
    );
};

export default TodoApp;