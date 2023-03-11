
import { SET_PRODUCT } from "./korzinkaType";
const initialState = {
  korzinka: [],
}

export const korzinkaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        korzinka: action.payload,
      }
    default:
      return state
  }
}