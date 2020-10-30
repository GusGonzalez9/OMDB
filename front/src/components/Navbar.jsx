import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" href="#">IMDb</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    {!props.log? <li className="nav-item active">
        <Link to="/login " className="nav-link">Login</Link>
      </li>
      :
      <li className="nav-item active">
      <button  onClick={props.logout} className="nav-link">Logout</button>
      </li>}
     
      <li className="nav-item">
        <Link to="/register" className="nav-link" >Register</Link>
      </li>
        <li>
        <Link to="/favorites" className="nav-link" >Favorites</Link>
        </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <input value={props.value} type="text" className="form-control" placeholder="Movies" onChange={props.handleChange}/>
      <button type="button" className="btn btn-dark" onClick={(e)=>props.handleSubmit(e)}>Search</button>
    </form>
  </div>
</nav>
  
);
  export default Navbar

