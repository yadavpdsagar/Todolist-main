import React from 'react'
import Todoitem from './Todoitem'
import "../css/Style.css"

function TodoList({todos , setTodos}) {

  const shortedTodos =todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className='list'>
     
    {shortedTodos.map(item=>(
        <Todoitem key={item.name}
         item={item}
          todos={todos}
           setTodos={setTodos}
           />
        ))}
    </div>
    
  )
}

export default TodoList



// const number = [10,23,25,78,98]
// number.sort((a,b,z)=>a-b)
// console.log(number)

// (5) [10, 23, 25, 78, 98]
