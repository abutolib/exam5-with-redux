import { createSlice } from "@reduxjs/toolkit";

const tokenSlise = createSlice({
  name: 'token',
  initialState:
  {
    token: "",
    
  }
  ,
  reducers: {
    handleSetToken:(state,action) => {
      state.token = action.payload
    },
    handleRemoveToken:(state,action) => {
      state.token = action.payload
    },
}});


export const { handleSetToken, handleRemoveToken } = tokenSlise.actions;
export default tokenSlise.reducer;