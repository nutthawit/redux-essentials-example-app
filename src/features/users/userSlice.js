import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  {id: "0", name: "Nutthawit Lilawannasin"},
  {id: "1", name: "Pongsi Wantamas"},
  {id: "3", name: "Kamonchanok Kumsudtee"},
]

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
})

export default userSlice.reducer