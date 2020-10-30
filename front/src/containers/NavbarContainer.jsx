import React from 'react'
import Navbar from '../components/Navbar'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchMovie} from '../action-creators/setMovie'
import Movies from '../components/Movies'
import {fetchLogout} from '../action-creators/setMovie'
const mapStateToProps = (state)=>{
    return {movie : state.movie.Search,
        log : state.t.id}
  } 

  const mapDispatchToProps = (dispatch)=>{
    return {
      fetchPelis : (movie)=> dispatch(fetchMovie(movie)),
      fetchLogOut : ()=> dispatch(fetchLogout())
    }
  } 
  
class NavbarContainer extends React.Component{
    constructor(){
        super(),
        this.state={
            movie:"",
            isFavorite:false,
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        const peli = e.target.value
        this.setState({movie:peli})
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.fetchPelis(this.state.movie)
    }

    render(){
        return(
            <div>
                <Navbar logout={this.props.fetchLogOut} log={this.props.log} handleChange={this.handleChange} handleSubmit={this.handleSubmit} value = {this.state.movie}/>
                <Movies movies={this.props.movie} userData={this.props.log} favorites={this.handleFavorite} />
            </div>
            
        )
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);