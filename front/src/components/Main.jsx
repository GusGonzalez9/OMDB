import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, component } from "react-router-dom";
import Login from "./Login";
import Favorites from "./favorites";
import Movies from "./Movies";
import Movie from "./movie";
import Register from "./Register";
import User from "./User";
import Home from "./Home";
import { fetchMe } from "../state/user";
import { loadState } from "../localStorage";
import NavbarContainer from "./NavbarContainer";
export default function App() {
  const dispatch = useDispatch();
  const token = loadState() ? loadState() : undefined;
  React.useEffect(() => {
    if (token) {
      dispatch(fetchMe());
    }
  }, []);

  return (
    <>
      <NavbarContainer />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route
          path="/movie/:id"
          render={(props) => {
            return <Movie movieId={props.match.params.id} />;
          }}
        />
        <Route path="/Register" component={Register} />
        <Route path="/login" component={Login} />
        {/* 
        <Route path="/user/favorites" component={Favorites} />
        <Route path="/user/:id" component={User} />
       
       
         */}
        {/*         <Footer />
         */}{" "}
      </Switch>
    </>
  );
}
