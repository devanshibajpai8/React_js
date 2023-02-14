import React from 'react'
import {Todo} from './Todo';
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center'><u><b>MyGrocery List</b></u></h3>
      {props.todos.length==0? "No Items in the list":
      props.todos.map((todo)=>{
      return (
      <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
      )
    })
      }
    </div>
  )
}

export default Todos
