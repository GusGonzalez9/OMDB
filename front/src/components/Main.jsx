import * as React from "react";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Favorites from "./Favorites";
import Movies from "./Movies";
import Movie from "./Movie";
import Register from "./Register";
import User from "./User";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    /*   dispatch(getFlightsRequest());
    dispatch(getAirportsRequest()); */
  }, []);

  return (
    <>
      <NavbarContainer />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/user/favorites" component={Favorites} />
        <Route path="/users" component={Users} />
        <Route path="/user/:id" component={User} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/user/login" component={Login} />
        <Route path="/user/register" component={Register} />
      </Switch>
    </>
  );
}
