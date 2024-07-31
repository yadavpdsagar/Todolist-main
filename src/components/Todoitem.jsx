import React from 'react'

function Todoitem({item, todos , setTodos }) {
  function  handeDelete(item){ 
   
    setTodos(todos.filter((todo)=>todo!==item))
    
  }
  return (
    
    <div className='item'>
      <div  className='itemname'>
      {item}
      <span>
        <button className='deletButton' 
         onClick={()=>handeDelete(item)}>X</button>
      </span>
      </div>
      
      <hr className='line'></hr>
      </div>
    
  )
}

export default Todoitem