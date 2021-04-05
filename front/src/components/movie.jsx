import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, component } from "react-router-dom";

import { fetchMe } from "../state/user";
import { loadState } from "../localStorage";
import NavbarContainer from "./NavbarContainer";
import { fetchSingleMovie } from "../state/movie";

export default ({ movieId }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  React.useEffect(() => {
    dispatch(fetchSingleMovie(movieId));
  }, []);

  return (
    <div className="cardSingleMovie">
      <div className="imageSingleMovie">
        <img src={movie.Poster}></img>
      </div>
      <div className="cardContent">
        <div className="Actors">
          <h4>
            Actors : <p>{movie.Actors}</p>{" "}
          </h4>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
