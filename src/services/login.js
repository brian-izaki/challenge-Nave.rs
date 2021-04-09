async function checkLogin(credentials) {
  try {
    const checkedLogin = await fetch(
      'https://navedex-api.herokuapp.com/v1/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      },
    ).then((login) => login.json());

    return checkedLogin;
  } catch (err) {
    return { error: true };
  }
}

export default checkLogin;
