import React from 'react'
import {TodoItem} from "./TodoItem.js"
// import {onDelete} from "./App.js"
// import TodoItem from "./myComponents/TodoItem.js"

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className = "container my-3" style={myStyle}> 
        <h3 className=''>Todos List</h3>
        {props.todos.length===0? "No todos to display":
        props.todos.map((todo) => {
            return <>
            <TodoItem todo ={todo} onDelete = {props.onDelete} key = {todo.Sno}/>
            {/* {console.log(todo.Sno)} */}
            <hr/>
            </>
        })}
        
    </div>
    
  )
}
