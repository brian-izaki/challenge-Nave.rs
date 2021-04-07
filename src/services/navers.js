import { getToken } from '../utils/handleToken';

const API_URL = "https://navedex-api.herokuapp.com/v1/navers"

function findAllNavers(){
  return fetch(API_URL, {
    headers: {
      "Authorization": `Bearer ${getToken()}`
    }
  })
    .then(response => response.json())
}

function createNaver(body) {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
}

export {
  findAllNavers,
  createNaver,
}