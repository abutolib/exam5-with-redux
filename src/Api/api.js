import axios from "axios";

const BASE_URL = 'http://localhost:8080'

export const api = {
  userRegister:(user) => axios.post(BASE_URL + '/register',user),
  userLogin:(user) => axios.post(BASE_URL + '/login',user),
  getProduct:() => axios.get(BASE_URL+'/korzinka'),
  postProduct:(product) => axios.post(BASE_URL+'/korzinka',product),
  deleteProduct:(id) => axios.delete(BASE_URL + '/korzinka/' + id),
  getSevimli:() => axios.get(BASE_URL+'/sevimli'),
  postSevimli:(product) => axios.post(BASE_URL+'/sevimli',product),
  deleteSevimli:(id) => axios.delete(BASE_URL + '/sevimli/' + id),
}