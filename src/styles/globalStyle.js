import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body, input, button {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  }

  img {
    width: 100%;
  }
`;
