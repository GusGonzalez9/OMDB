import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { DELETE_FAVORITES, POST_FAVORITES } from "../constants/favorites";
export const addToFavorites = createAsyncThunk(
  POST_FAVORITES,
  (movie, thunkAPI) => {
    const { user } = thunkAPI.getState();
    let token = user.token;
    return axios
      .post("/api/movie/favorites", movie, {
        headers: { authorization: token },
      })
      .then((res) => res.data);
  }
);

export const deleteFavorites = createAsyncThunk(DELETE_FAVORITES, (user) => {
  return axios.delete(`/api/favorites/${user.id}`);
});

export default movieReducer = createReducer([], {
  [addToFavorites.fulfilled]: (state, action) => action.payload,
});
