import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";
import Alterar from "./pages/Alterar";
import { PAGES_ROUTE } from "./utils/pagesRoute";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 32px;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path={PAGES_ROUTE.home}>
              <Home />
            </Route>

            <Route path={PAGES_ROUTE.login}>
              <Login />
            </Route>

            <Route path={PAGES_ROUTE.cadastrar}>
              <Cadastrar />
            </Route>

            <Route path={PAGES_ROUTE.alterar}>
              <Alterar />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
