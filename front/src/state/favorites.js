import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { DELETE_FAVORITES, POST_FAVORITES, ALL_FAVORITES } from "../constants/favorites";
export const addToFavorites = createAsyncThunk(
  POST_FAVORITES,
  (movie, thunkAPI) => {
    const { user } = thunkAPI.getState();
    let token = user.token;
    let userId = user.user.id
    console.log({movie,userId})
    return axios
      .post("/api/favorites", {movie,userId}, {
        headers: { authorization: token },
      })
      .then((res) => res.data);
  }
);

export const allFavorites = createAsyncThunk(ALL_FAVORITES,  (movie=false,thunkAPI) => {
  const  {user}  = thunkAPI.getState();
  let userId = user.user.id
  return axios.get(`/api/favorites/${userId}`)
})

export const deleteFavorites = createAsyncThunk(DELETE_FAVORITES, (movieId,thunkAPI ) => {
  const  {user}  = thunkAPI.getState();

  return axios.delete(`/api/favorites/${user.user.id}/${movieId}`);
});

const favoriteReducer = createReducer([], {
});
 export default favoriteReducer