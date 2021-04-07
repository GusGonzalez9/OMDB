import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { saveState, loadState ,RemoveItem} from "../localStorage";
import {
  USER_LOGGIN,
  USER_REGISTER,
  CLEAR_USER,
  FETCH_ME,
} from "../constants/user";

export const userRegister = createAsyncThunk(USER_REGISTER, (user) => {
  return axios.post("/api/user/register", user);
});

export const userLoggin = createAsyncThunk(USER_LOGGIN, (user) => {
  return axios.post("/api/user/loggin", user).then((res) => {
    console.log(res)
    saveState(res.data);
    return res.data;
  });
});
export const fetchMe = createAsyncThunk(FETCH_ME, () => {
  let token = loadState("setUser").token;
  return axios
    .get("/api/user/me", { headers: { Authorization: `${token}` } })
    .then((res) => res.data)
    .then((data) => {
      return  { user: data, token: token }
      
    });
});
export const clearUser = createAsyncThunk(CLEAR_USER,()=>{
  RemoveItem()
});

const userReducer = createReducer(
  {},
  {
    [userLoggin.rejected]: (state, action) => { return {error:'emailOrPassword'}},
    [userLoggin.fulfilled]: (state, action) => action.payload,
    [fetchMe.fulfilled]: (state, action) => action.payload,
    [clearUser.fulfilled]: (state, action) => { return {}},
  }
);
export default userReducer;
