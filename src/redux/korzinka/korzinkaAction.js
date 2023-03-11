import { SET_PRODUCT } from "./korzinkaType";

export const setProduct = (product) => {
  return ({
    type:SET_PRODUCT,
    payload:product,
  })
}