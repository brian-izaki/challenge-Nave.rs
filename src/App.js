import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";
import Alterar from "./pages/Alterar";

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
            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/cadastrar">
              <Cadastrar />
            </Route>

            <Route path="/alterar">
              <Alterar />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
