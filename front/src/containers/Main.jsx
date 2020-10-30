import React from "react";
 import {fetchMovie} from '../action-creators/setMovie'
 import { connect } from "react-redux";
import {Route, Switch,Redirect} from 'react-router-dom'
import NavbarContainer from './NavbarContainer'
import MovieContainer from "./MovieContainer";
import RegistroContainer from './RegistroContainer'
import SingContainer from './LoginContainer'
import {fetchPermanencia} from '../action-creators/setMovie'
import FavoritesContainer from "./favoritesContainer";
import "bootswatch/dist/lux/bootstrap.min.css" 
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchPelis : ()=> dispatch(fetchMovie()),
    fetchPermanencia1: ()=> dispatch(fetchPermanencia())
  }
} 
const mapStateToProps = (state)=>{
  return {movie : state.movie.Search}
} 

class Main extends React.Component {
   componentDidMount() {
     this.props.fetchPermanencia1()
  //realizo pedido axios a actions creator
}  
  render() {
    return (
      <div>
      <div>   
        <Switch>
          <Route exact path="/search" component={ NavbarContainer}/>
           <Route exact path="/pelis/:id" component={MovieContainer} />
           <Route exact path ="/login " component={SingContainer}/>
           <Route exact path="/register"  component={RegistroContainer} />
           <Route exact path="/favorites" component={FavoritesContainer}/>
           <Redirect from="/" to ="/search"/>
         </Switch>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);