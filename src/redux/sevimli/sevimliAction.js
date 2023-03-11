import { SET_PRODUCT } from "./sevimliType";

export const setSevimli = (product) => {
  return ({
    type:SET_PRODUCT,
    payload:product,
  })
}