import  { useState } from 'react'
import "../css/Style.css"
function Forms( {todos , setTodos}) {
    const[todo, setTodo] = useState('');
    // const [todos, setTodos]= useState([]);

    function handelSumit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
        console.log(todos)
        
       }
  return (
    <form  className='todoform' onSubmit={handelSumit}>
        <div className='inputcontainer'>
        <input className='todoinput' onChange={(e)=>setTodo(e.target.value)}  value={todo} type="text"  placeholder='enter your todo '/>
        <button className='todobutton' type='summit' >Add</button>
        </div>
    
    
        </form>
  )
}

export default Forms