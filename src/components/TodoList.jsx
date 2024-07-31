import React from 'react'
import Todoitem from './Todoitem'
import "../css/Style.css"

function TodoList({todos , setTodos}) {
  
  return (
    <div className='list'>
     
    {todos.map(item=>(
        <Todoitem key={item} item={item} todos={todos} setTodos={setTodos}/>
        ))}
    </div>
    
  )
}

export default TodoList