import React from 'react'

const Registro = (props)=>(
  <form>
    <div class="form group ">
      <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Email address:</label>
        <input type="email"  className="form-control" id="exampleInputEmail1" name="email" onChange={props.handleChange}></input>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form group">
      <label for="exampleInputPassword1">Password</label>
        <input type="password" id="exampleInputPassword"name="password" className="form-control" onChange={props.handleChange}></input>
    </div>
    <input type="email"  className="form-control" id="exampleInputEmail1" name="email" onChange={props.handleChange}></input>

    <button type="submit" class="btn btn-primary" onClick={props.handleSubmit}>Submit</button>
  </form>
)
export default Registro
  