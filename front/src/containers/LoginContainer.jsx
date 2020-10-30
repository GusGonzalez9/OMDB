import React from "react";
import {connect} from 'react-redux'
import {fetchT} from '../action-creators/setMovie'
import Login from '../components/Login'


const mapDispatchToProps = (dispatch,ownProps)=>{
  const history = ownProps.history
 return {
   fetchT : (data)=> dispatch(fetchT(data)),history
 }
} 


class LoginContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
         this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this) 
    }
     handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
     handleSubmit(e){
        e.preventDefault()
        this.props.fetchT(this.state).then(()=> this.props.history.push("/"))
    }  
  render() {
    return (
      <div>
          <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(LoginContainer)