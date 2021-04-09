function setToken(token) {
  sessionStorage.setItem('token', JSON.stringify(token));
}

function getToken() {
  const token = sessionStorage.getItem('token');
  const userToken = JSON.parse(token);
  return userToken?.token;
}

function removeToken() {
  sessionStorage.removeItem('token');
}

export { setToken, getToken, removeToken };
