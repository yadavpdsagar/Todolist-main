import React from 'react'
import   "../css/Style.css"
import style from "./todoitem.module.css"

function Todoitem({item, todos , setTodos }) {
  function  handeDelete(item){ 
   
    setTodos(todos.filter((todo)=>todo!==item))
    
  }

  function  clickeitem(name){
   
// console.log("the item is clicked",name )(
setTodos( todos.map((todo)=>
  todo.name===name ?{...todo ,done:!todo.done}: todo))
console.log(todos)
  }
const classchange = item.done ? style.complet : "" ;
  return (
    
    <div className='item'>
      <div  className='itemname'>
        <span  className={classchange  } onClick={()=>clickeitem(item.name)}> {item.name}</span>
      
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




// let todos= [{name:"lunch" , done:false}, {name:"sagar" , done:false},{name:"yadav" , done:false}]
// let name= "lunch"

// const newTodos = todos.map((todo)=>todo.name===name ? {...todo , done:!todo.done}:todo)

// console.log(newTodos)

///-------------output-----------------//

// (3) [{...}, {...}, {...}]
// 0
// :
// (2) {name: "lunch", done: true}
// 1
// :
// (2) {name: "sagar", done: false}
// 2
// :
// (2) {name: "yadav", done: false}
// [[Prototype]]
// :
// []