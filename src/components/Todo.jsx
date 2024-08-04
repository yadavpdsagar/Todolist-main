import  { useState } from 'react'

import Forms from './Forms';
import TodoList from './TodoList';
import Footer from './Footer';

function Todo() {
  
   const [todos, setTodos] =  useState([]);

   const completeTodos = todos.filter((todo)=>todo.done).length

   const totalTodos= todos.length
   


  return (
    <div>
   <Forms todos={todos} setTodos={setTodos} />
   <TodoList todos={todos} setTodos={setTodos} />
  <Footer completeTodos={completeTodos} totalTodos={totalTodos}  />
    </div>
  )
}

export default Todo