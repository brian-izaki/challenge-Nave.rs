import { getToken } from '../utils/handleToken';

const API_URL = 'https://navedex-api.herokuapp.com/v1/navers';

async function findAllNavers() {
  return fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => response.json());
}

async function findOneNaver(id) {
  return fetch(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => response.json());
}

async function createNaver(body) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json());
}

async function deleteNaver(id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => response.json());
}

async function updateNaver(id, body) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json());
}

export {
  findAllNavers,
  findOneNaver,
  createNaver,
  deleteNaver,
  updateNaver,
};
