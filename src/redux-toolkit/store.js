import { configureStore } from "@reduxjs/toolkit";
import korzinkaSlise from './korzinkaSlice';
import sevimliSlice from "./sevimliSlice";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";



export const store2 = configureStore({
  reducer: {
    korzinka: korzinkaSlise,
    sevimli: sevimliSlice,
    token: tokenSlice,
    user: userSlice,
  }
})