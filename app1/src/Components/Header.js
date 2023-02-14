import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return (
    <div>
      <font size="5">
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-a" href="/about"><b>About</b></a>
        </li>
        
      </ul>
    <div className="container my-4">
      <h3 className='text-center'><font face="" size="8"><u>GROCERY APP</u></font></h3>
      </div>
      {props.searchBar? <form className="d-flex" role="search">
        <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:""}
    </div>
  </div>
</nav>
</font>
    </div>
  )
}
Header.defaultProps={
    title:"Title here",
    searchBar: true
}
Header.propTypes={
    title:PropTypes.string,
    searchBar:PropTypes.bool
}
 