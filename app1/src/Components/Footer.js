import React from 'react'

export const Footer = () => {
  let divStyle={
    position:"relative",
    width:"100%",
    top:"100vh",
    border:"5px solid blue"
  }
  return (
    <div className='bg-dark text-light py-2' style={divStyle}>
      <p className='text-center'>
        Copyright &copy;MyGroceryList.com </p>
      
    </div>
  )
}

export default Footer
