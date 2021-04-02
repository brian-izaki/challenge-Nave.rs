import styled from "styled-components";
import logo from "../../assets/logo.svg";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonExit = styled.a`
  color: ${(props) => props.theme.mainColor};
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  padding: 0 5px;

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
        <ButtonExit href="#">Sair</ButtonExit>
      </div>
    </HeaderContainer>
  );
}
