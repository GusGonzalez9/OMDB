import Registro from '../components/Registro'
import React from "react";
import {connect} from 'react-redux'
import {fetchUser} from '../action-creators/setMovie'


 const mapDispatchToProps = (dispatch,ownProps)=>{
     const history = ownProps.history 
    return {
      fetchUser : (data)=> dispatch(fetchUser(data)),
      history 
    }
  } 


class RegistroContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            registrado:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
     handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
        this.props.fetchUser(this.state).then(()=>this.props.history.push("/register"))
    } 
  render() {
    return (
      <div>
          <Registro handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(RegistroContainer)