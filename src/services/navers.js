import { getToken } from '../utils/handleToken';

const API_URL = "https://navedex-api.herokuapp.com/v1/navers"

function findAllNavers(){
  return fetch(API_URL, {
    headers: {
      "Authorization": `Bearer ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(navers => navers)
}

export {
  findAllNavers,
}