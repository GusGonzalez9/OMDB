import React from "react";
import {connect} from 'react-redux'
import Favorites from '../components/favorites'
import {getFavorites} from '../action-creators/setMovie'
import {deleteFavorites} from '../action-creators/setMovie'
const mapDispatchToProps = (dispatch)=>{
 return {
   getFavorites: (id)=> dispatch(getFavorites(id)),
   deleteFavorites : (id)=> dispatch(deleteFavorites(id))
 }
} 
const mapStateToProps = (state)=>{
    return{
        id : state.t.id , favorites : state.favorites
    }
}


class FavoritesContainer extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete=this.handleDelete.bind(this)
    }
    componentDidMount(){
        this.props.getFavorites(this.props.id)
    }
    handleDelete(id){
      this.props.deleteFavorites(id)
    }

  render() {
    
    return (
      <div className=" bg-dark">
          <Favorites  favorites = {this.props.favorites}  handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FavoritesContainer)