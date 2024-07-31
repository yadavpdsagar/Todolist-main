import React, { useState } from 'react'
import Todoitem from './Todoitem';

function Todo() {
    const[todo, setTodo] = useState('');
const [todos, setTodos]= useState([]);

   function handelSumit(e){
    e.preventDefault();
    setTodos([...todos,todo]);
    setTodo("");
    
   }


  return (
    <>
    <form onSubmit={handelSumit}>
<input onChange={(e)=>setTodo(e.target.value)}  value={todo} type="text" />
<button type='summit' >test</button>

    </form>
    {todos.map(item=>(
    <Todoitem key={item} item={item}/>
    ))}
    
    </>
  )
}

export default Todo