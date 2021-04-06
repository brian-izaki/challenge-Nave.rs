import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";
import Alterar from "./pages/Alterar";
import { PAGES_ROUTE } from "./utils/pagesRoute";
import { getToken } from "./utils/handleToken";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 32px;
`;

function App() {
  const [token, setToken] = useState(getToken());

  function PrivateRoute({ children, ...attr }) {
    return (
      <Route
        {...attr}
        render={({ location }) =>
          token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: PAGES_ROUTE.login,
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <>
      <GlobalStyle />

      <Container>
        <BrowserRouter>
          <Switch>
            <Route path={PAGES_ROUTE.login}>
              <Login setToken={setToken} />
            </Route>

            <PrivateRoute exact path={PAGES_ROUTE.home}>
              <Home />
            </PrivateRoute>

            <PrivateRoute path={PAGES_ROUTE.cadastrar}>
              <Cadastrar />
            </PrivateRoute>

            <PrivateRoute path={PAGES_ROUTE.alterar}>
              <Alterar />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
