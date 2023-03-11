import { SET_PRODUCT } from "./sevimliType";
const initialState = {
  sevimli: [],
}

export const sevimliReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        sevimli: action.payload,
      }
    default:
      return state
  }
}