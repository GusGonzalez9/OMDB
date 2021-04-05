import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import SimpleRating from "../views/Review";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  Link: {
    color: "white",
    height: 100,
    width: 100,
  },
}));

const Card = ({ movie }) => {
  const [fav, setFav] = React.useState(false);
  const classes = useStyles();
  return (
    <div className="CardContainer">
      <Tooltip title="Add To Favorite">
        <button className="botonAdd">
          <AddIcon
            style={{
              fontSize: 25,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 0,
              marginRight: 10,
            }}
          />
        </button>
      </Tooltip>
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
