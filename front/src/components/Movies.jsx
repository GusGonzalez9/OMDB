import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, component } from "react-router-dom";
import Movies from "./Movies";
import { fetchMe } from "../state/user";
import { loadState } from "../localStorage";
import Card from "./Card";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [progress, setProgress] = React.useState(10);
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return setLoader(true), 0;
        } else return prevProgress + 10;
      });
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);
  React.useEffect(() => {
    setLoader(false);
  }, [movies]);
  const mapped = (movies) => {
    return (
      movies.length &&
      movies.map((movie, index) => {
        return <Card movie={movie} index={index}></Card>;
      })
    );
  };

  return (
    <div className="container1">
      {!loader ? (
        <CircularProgressWithLabel value={progress} />
      ) : (
        mapped(movies)
      )}
    </div>
  );
};

function CircularProgressWithLabel(props) {
  return (
    <div>
      <Box position="relative" display="inline-flex" left={40}>
        <CircularProgress variant="determinate" {...props} />

        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          <Typography
            variant="caption"
            component="div"
            color="white"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
      <h2 className="CardTitle">AWAIT PLEASE</h2>
    </div>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
