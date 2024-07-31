import  { useState } from 'react'

import Forms from './Forms';
import TodoList from './TodoList';

function Todo() {
  
   const [todos, setTodos] =  useState([]);


   


  return (
    <div>
   <Forms todos={todos} setTodos={setTodos} />
   <TodoList todos={todos} setTodos={setTodos} />
    
    </div>
  )
}

export default Todo