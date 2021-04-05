import moviesReducer from "./movies";
import userReducer from "./user";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import movieReducer from "./movie";
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
    user: userReducer,
  },
});

export default store;
