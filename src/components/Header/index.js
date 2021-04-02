import styled from "styled-components";


const Header = styled.header`
  color: ${(props) => props.theme.mainColor};
  font-size: 0.85rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin: 10px;
`;

export default Header;