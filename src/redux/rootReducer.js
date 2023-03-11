import { combineReducers } from "redux";
import {korzinkaReducer} from './korzinka/korzinkaReducer'
import { sevimliReducer } from "./sevimli/sevimliReducer";
import { tokenReducer } from "./token/tokenReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  product:korzinkaReducer,
  token:tokenReducer,
  user:userReducer,
  sevimli:sevimliReducer

})