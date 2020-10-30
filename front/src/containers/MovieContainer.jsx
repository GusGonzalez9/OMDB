import React from "react";
import Movie from '../components/movie'
import {fetchData} from '../action-creators/setMovie'
import {connect} from 'react-redux'
import {AddFavorites} from '../action-creators/setMovie'
const mapDispatchToProps = (dispatch,ownProps)=>{
    const ID = ownProps.match.params.id
    return {
      fetchDatos : ()=> dispatch(fetchData(ID)),
      addFavs : (data)=> dispatch(AddFavorites(data)),
    }
  } 
  const mapStateToProps = (state)=>{ 
    return {datos : state.datos , user : state.t.id}
  } 

class MovieContainer extends React.Component {
    constructor(props){
        super(props),
        this.state={
          isFavorite : false
        }
        this.handleFavorite=this.handleFavorite.bind(this)
    }
    componentDidMount() {
      this.props.fetchDatos();
      }
      handleFavorite(title,poster){
        if(this.state.isFavorite){
            this.setState({isFavorite : false})
        }else{
        this.setState({isFavorite:true})
         this.props.addFavs({title,poster,user:this.props.user})
         }
    }
  
  render() {
    return (
      <div>
          <Movie Movie={this.props.datos} isFavorite={this.state.isFavorite} handleFavorite={this.handleFavorite}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);