import React from 'react'
export const Todo = ({todo,onDelete}) => {
  return (
    <>
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>Delete Item</button>
    </div>
    <hr />
    </>
  )
}

export default Todo
