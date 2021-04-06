import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { PAGES_ROUTE } from "../../utils/pagesRoute";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const ButtonExit = styled(Link)`
  color: ${(props) => props.theme.mainColor};
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    transition: 0.5s;
  }

  &:hover {
    &::after {
      background-color: ${(props) => props.theme.mainColor};
      width: 100%;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="Logo do Navdex (Nave.rs)" />
      </div>

      <div />

      <div>
        {/* Fazer com que deslogue da aplicação apagando o login */}
        <ButtonExit to={PAGES_ROUTE.login}>Sair</ButtonExit>
      </div>
    </HeaderContainer>
  );
}
