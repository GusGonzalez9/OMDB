import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import SimpleRating from "../views/Review";
import AddIcon from "@material-ui/icons/Add";
import { addToFavorites } from "../state/favorites";
import { useDispatch, useSelector } from "react-redux";
import AlertAddFavorite from "../views/AlertAddFavorite";
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  Link: {
    color: "white",
    height: 100,
    width: 100,
  },
}));

let extractor = (arrDeObj)=> {
  let Titles = []
 arrDeObj[0] && arrDeObj.map(movie => {
    Titles.push(movie.Title)
  })
  return Titles

}

const Card = ({ movie ,incluidas}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user)
  const[addEvent , setAddEvent] = React.useState(false)


 let titulos = (titulo)=>{
  return extractor(incluidas).includes(titulo)
 } 

  const submitFavorite = () => {
    setAddEvent(true);
    dispatch(addToFavorites(movie)).then(() => {
      setTimeout(() => {
        setAddEvent(false);
      }, 1000);
    });
  };


  return (
    <div className="CardContainer">

      {addEvent ? <AlertAddFavorite /> : null}
    {user.user && user.user.id ? 
     <Tooltip title="Add To Favorite">
     <button className="botonAdd" onClick={() => submitFavorite()}>
       {user.user && user.user.id && titulos(movie.Title) ? <CheckIcon style={{
           fontSize: 25,
           color: "white",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           marginLeft: 0,
           marginRight: 10,
         }}/> :  <AddIcon
         style={{
           fontSize: 25,
           color: "white",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           marginLeft: 0,
           marginRight: 10,
         }}
      
       /> }
      
     </button>
   </Tooltip> : null }
     
      <div className="CardImg">
        <img src={movie.Poster}></img>
      </div>
      <div className="CardContent">
        <h3 className="CardTitle">{movie.Title}</h3>
        <SimpleRating rating={2}></SimpleRating>
        <div className="buttons">
          <Tooltip title="See more">
            <Link
              to={`/movie/${movie.imdbID}`}
              style={{ textDecoration: "none" }}
            >
              <i className="fas fa-eye"></i>
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default Card;
