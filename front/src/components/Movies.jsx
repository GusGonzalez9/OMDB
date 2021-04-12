import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Loading from "../views/Loading";
import {allFavorites} from '../state/favorites'

export default () => {
  const movies = useSelector((state) => state.movies);
  const user = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  const [Loader, setLoader] = React.useState(false);
  const [incluidas, setIncluidas] = React.useState([])

  React.useEffect(() => {
    setLoader(true);
    user.user &&
    user.user.id ? 
    dispatch(allFavorites()).then( fav =>  setIncluidas(fav.payload.data) ).then(()=> 
    setTimeout(() => {
      setLoader(false);
    }, 1000)
    ) :  setTimeout(() => {
      setLoader(false);
    }, 1000) ; 
  }, [movies]);

  const mapped = (movies) => {
    return (
      movies.length &&
      movies.map((movie, index) => {
        return (
          <>
            <Card movie={movie} index={index} incluidas={incluidas}></Card>
          </>
        );
      })
    );
  };
  return (
    <div className="container1">{Loader ? <Loading /> : mapped(movies)}</div>
  );
};
