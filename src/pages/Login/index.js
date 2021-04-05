import styled from "styled-components";
import FormField from "../../components/FormField";
import Logo from "../../assets/logo.svg"
import Button from '../../components/Button';

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
    border: 1px solid ${props => props.theme.mainColor};
    padding: 40px 32px;

    & .logo {
      height: 70px;
      margin-bottom: 50px;
    }
  }
`;

export default function Login() {
  return (
    <LoginContainer>
      <div>
        <img className="logo" src={Logo} alt="Logo da Nave.rs"/>

        <form>
          <FormField text="E-mail" type="email" name="email" id="emailLogin" required/>
          <FormField text="Senha" type="password" name="senha" id="senhaLogin" required/>

          <BtnLogin> Entrar </BtnLogin>
        </form>
      </div>
    </LoginContainer>
  )
}