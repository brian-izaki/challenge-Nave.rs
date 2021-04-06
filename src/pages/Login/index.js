import styled from "styled-components";
import FormField from "../../components/FormField";
import Logo from "../../assets/logo.svg";
import Button from "../../components/Button";
import { setToken as setTokenSession } from "../../utils/handleToken";
import { PAGES_ROUTE } from "../../utils/pagesRoute";
import { checkLogin } from "../../services/login";
import { useState } from "react";
import { useHistory } from "react-router";

const BtnLogin = styled(Button.Dark)`
  width: 100%;
  font-size: 1rem;
`;

const LoginContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 448px;
    height: auto;
    border: 1px solid ${(props) => props.theme.mainColor};
    padding: 40px 32px;

    & .logo {
      height: 70px;
      margin-bottom: 50px;
    }

    & .error-message {
      width: 100%;
      padding-bottom: 20px;

      color: tomato;
      font-weight: 600;
      text-align: center;


    }
  }
`;

export default function Login({ setToken }) {
  const history = useHistory();

  const [isErrorValidation, setIsErrorValidation] = useState(false)
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const userSection = await checkLogin(loginForm);
    
    if (!userSection.token){
      setIsErrorValidation(true)
      return;
    }
    
    setToken(userSection);
    setTokenSession(userSection);

    history.push(PAGES_ROUTE.home);
  }

  return (
    <LoginContainer>
      <div>
        <img className="logo" src={Logo} alt="Logo da Nave.rs" />

        <form onSubmit={handleSubmit}>
          <FormField
            text="E-mail"
            type="email"
            name="email"
            id="emailLogin"
            onChange={handleForm}
            required
          />
          <FormField
            text="Senha"
            type="password"
            name="password"
            id="senhaLogin"
            onChange={handleForm}
            required
          />
          <div className="error-message">
            {isErrorValidation && (<span> Oops, o email ou a senha está errado </span>) }
          </div>
          <BtnLogin>Entrar</BtnLogin>
        </form>
      </div>
    </LoginContainer>
  );
}
