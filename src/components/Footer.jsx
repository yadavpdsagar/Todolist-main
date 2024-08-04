import React from 'react'
import "../css/Style.css"

function Footer ({completeTodos , totalTodos}) {
    
  return (
    <div className='footer'>
       
            <span className='footeritem'>  complete Todos :  {completeTodos}</span>
            <span className='footeritem'>   Total Todos :  {totalTodos}</span>
        </div>
  )
}

export default Footer