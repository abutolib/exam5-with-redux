import { createSlice } from "@reduxjs/toolkit";

const userSlise = createSlice({
  name: 'user',
  initialState:
  {
    user: "",
  }
  ,
  reducers: {
    handleSetUser:(state,action) => {
      state.user = action.payload
    },
    handleRemoveUser:(state,action) => {
      state.user = action.payload
    },
}});


export const { handleSetUser, handleRemoveUser } = userSlise.actions;
export default userSlise.reducer;