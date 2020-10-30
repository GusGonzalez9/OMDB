import React from 'react'

const Login = (props)=>(
  <form>
    <div className="form group ">
      <label for="exampleInputEmail1" className="col-sm-2 col-form-label">Email address:</label>
        <input type="email"  className="form-control" id="exampleInputEmail1" name="email"  onChange={props.handleChange} ></input>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form group">
      <label for="exampleInputPassword1">Password</label>
        <input type="password" id="exampleInputPassword"name="password" className="form-control"  onChange={props.handleChange} ></input>
    </div>
    <button type="submit" class="btn btn-primary"  onClick={props.handleSubmit} >Submit</button>
  </form>
)
export default Login


//ver si el error se encuentra en el modelo, sino en secret:"user"
