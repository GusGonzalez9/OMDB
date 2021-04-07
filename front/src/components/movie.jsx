import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, component } from "react-router-dom";
import SimpleRating from "../views/Review";
import { fetchSingleMovie } from "../state/movie";
import CircularIndeterminate from "../views/Loading";
export default ({ movieId }) => {
  const dispatch = useDispatch();
  const [Loader,setLoader] = React.useState(false)
  const movie = useSelector((state) => state.movie);

  
  React.useEffect(() => {
    setLoader(true)
    dispatch(fetchSingleMovie(movieId))
    .then(()=> setTimeout(()=> {setLoader(false)},1000))
  }, []);

  

  return (
    <>
    {Loader? <CircularIndeterminate/> : <div className="cardSingleMovie">
      <div className="imageSingleMovie">
        <img src={movie.Poster}></img>
      </div>

      <div className="cardContent">
        <div className="movieTitle">
          <h1 className="movie__title">{movie.Title}</h1>
        </div>

        <div className="descripciones">
          <div className="description">
            <h3 className="description__plot">{movie.Plot}</h3>
          </div>

          <div className="description">
            <h3 className="description__plot">{movie.Actors}</h3>
          </div>
        </div>
        <div className="RatingCard">
          <div>
            <SimpleRating
              rating={Math.floor(movie.imdbRating / 2)}
            ></SimpleRating>
          </div>

          <div className="year">
            <span>{movie.Year}</span>
          </div>

          <div className="year">
            <span>{movie.Runtime}</span>
          </div>

          <div className="year">
            <span>{movie.Country}</span>
          </div>
        </div>
      </div>
    </div>

    }
    
    </>
  );
};

/* Actors: "Bruce Greenwood, Hayden Panettiere, Caspar Poyck, Gary Bullock"
Awards: "3 nominations."
BoxOffice: "$49,772,522"
Country: "USA"
DVD: "22 Jul 2009"
Director: "Frederik Du Chau"
Genre: "Adventure, Comedy, Drama, Family, Sport"
Language: "English"
Metascore: "43"
Plot: "An abandoned zebra grows up believing he is a racehorse, and, with the help of his barnyard friends and a teenage girl, sets out to achieve his dream of racing with thoroughbreds."
Poster: "https://m.media-amazon.com/images/M/MV5BMjE0NDA2MTQwM15BMl5BanBnXkFtZTcwMzYxNDcyMQ@@._V1_SX300.jpg"
Production: "Alcon Entertainment"
Rated: "PG"
Ratings: (3) [{…}, {…}, {…}]
Released: "14 Jan 2005"
Response: "True"
Runtime: "102 min"
Title: "Racing Stripes"
Type: "movie"
Website: "N/A"
Writer: "David Schmidt (story), Steven P. Wegner (story), Kirk DeMicco (story), Frederik Du Chau (story), David Schmidt (screenplay)"
Year: "2005"
imdbID: "tt0376105"
imdbRating: "5.2"
imdbVotes: "16,128" */
