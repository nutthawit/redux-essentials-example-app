import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  {id: "1", name: "Nutthawit Lilawannasin"},
  {id: "2", name: "Pongsi Wantamas"},
  {id: "3", name: "Kamonchanok Kumsudtee"},
  {id: "4", name: "Vichai Lilawannasin"},
]

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
})

export default userSlice.reducer