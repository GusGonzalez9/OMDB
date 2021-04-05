import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { SINGLE_MOVIE } from "../constants/movie";
export const fetchSingleMovie = createAsyncThunk(SINGLE_MOVIE, (movieId) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${movieId}`)
    .then((res) => {
      return res.data;
    });
});

const movieReducer = createReducer([], {
  [fetchSingleMovie.fulfilled]: (state, action) => action.payload,
});

export default movieReducer;
