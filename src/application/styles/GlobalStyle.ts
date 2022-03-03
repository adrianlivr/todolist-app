import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: "Nunito Sans";
  }

  a {
    text-decoration: none;
  }
`;
