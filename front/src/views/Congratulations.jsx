import React from "react";
import {
  Route,
  Switch,
  Redirect,
  component,
  Link,
  useHistory,
} from "react-router-dom";
const Congratulations = ({ user, avatar }) => {
  return (
    <div className="cardCongratulations">
      <div className="cardHeader">
        <h3>Welcome To Omdb {user.firstName}</h3>
      </div>
      <div className="cardContent2">
        <Link>
          <button className="buttonsCongratulations">Login</button>
        </Link>

        <Link to="/">
          <button className="buttonsCongratulations">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Congratulations;
