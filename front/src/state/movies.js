import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_MOVIES } from "../constants/movies";
export const fetchMovies = createAsyncThunk(GET_MOVIES, (movie) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${movie}`)
    .then((res) => {
      return res.data.Search;
    });
});




const moviesReducer = createReducer([], {
  [fetchMovies.fulfilled]: (state, action) => action.payload,
});
export default moviesReducer;
