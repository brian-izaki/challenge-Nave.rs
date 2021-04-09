import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import GlobalStyle from './styles/globalStyle';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Alterar from './pages/Alterar';
import PAGES_ROUTE from './utils/pagesRoute';
import { getToken } from './utils/handleToken';
import PrivateRoute from './components/PrivateRoute';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 32px;
`;

function App() {
  const [token, setToken] = useState(getToken() || '');

  return (
    <>
      <GlobalStyle />

      <Container>
        <BrowserRouter>
          <Switch>
            <Route path={PAGES_ROUTE.login}>
              <Login setToken={setToken} />
            </Route>

            <PrivateRoute token={token} exact path={PAGES_ROUTE.home}>
              <Home />
            </PrivateRoute>

            <PrivateRoute token={token} path={PAGES_ROUTE.cadastrar}>
              <Cadastrar />
            </PrivateRoute>

            <PrivateRoute token={token} path={`${PAGES_ROUTE.alterar}/:id`}>
              <Alterar />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
