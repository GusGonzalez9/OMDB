import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { saveState, loadState } from "../localStorage";
import {
  USER_LOGGIN,
  USER_REGISTER,
  CLEAR_USER,
  FETCH_ME,
} from "../constants/user";

export const userRegister = createAsyncThunk(USER_REGISTER, (user) => {
  return axios.post("/api/user/register", user);
});

export const userLoggin = createAsyncThunk(USER_LOGGIN, user => {
  console.log("asasd")
  return axios.post("/api/user/loggin", user).then((res) => {
    saveState(res.data);
    return res.data;
  });
});
export const fetchMe = createAsyncThunk(FETCH_ME, () => {
  let token = loadState("setUser").token;
  return axios
    .get("/api/user/me", { headers: { Authorization: `${token}` } })
    .then((res) => console.log(res.data))
    .then((data) => {
      console.log
      return { data, token };
    });
});
export const clearUser = createAction(CLEAR_USER);

const userReducer = createReducer({}, {
  [userLoggin.fullfiled]: (state, action) => action.payload,
  [fetchMe.fullfiled]: (state, action) => action.payload,
  [clearUser.fullfiled]: (state, action) => {},
});
export default userReducer;
