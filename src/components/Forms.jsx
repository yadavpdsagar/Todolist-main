import  { useState } from 'react'
import "../css/Style.css"
function Forms( {todos , setTodos}) {
    // const[todo, setTodo] = useState('');
    const[todo, setTodo] = useState({name:"",done:false});

    function handelSumit(e){
        e.preventDefault();
        
        setTodos([...todos,todo]);
        console.log(todos)
      setTodo({name:"",done:false});
        
        
       }
  return (
    <form  className='todoform' onSubmit={handelSumit}>
        <div className='inputcontainer'>
        <input className='todoinput' onChange={(e)=>setTodo({name:e.target.value, done:false})}  value={todo.name} type="text"  placeholder='enter your todo '/>
        <button className='todobutton' type='summit' >Add</button>
        </div>
    
    
        </form>
  )
}

export default Forms