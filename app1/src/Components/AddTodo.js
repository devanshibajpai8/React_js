import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");


  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc)
    {  
      alert("title or description cannot be blank!!")
    }
    else{
    addTodo(title,desc);
    setTitle("");
    setDesc("");
    }
  }
  <script>
    <p align="center">MyGroceryList</p>
  </script>
  return (
    <div className='container'>
      <form onSubmit={submit}>
        <h2><u><font face=""><b>Add An Item</b></font></u></h2>
  <div className="mb-3">
    <label htmlFor="title" className="form-label"><font size="4" face ="Comic Sans MS" color=''>Grocery Item</font></label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="title" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label"><font size="4" face ="Comic Sans MS" color=''>Item Quantity</font></label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc" />
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Item</button>
</form>
    </div>
  )
}

export default AddTodo
