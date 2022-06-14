import { createGlobalStyle } from "styled-components";
<link src='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&display=swap' />

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    font-size: 42px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }

  h2 {
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }

  h3 {
    text-align: center;
    font-size: 26px;
    font-weight: 900;
  }

  p {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.5em;
    color: gray;
  }

  sub {
    font-size: 16px;
    font-weight: 500;
    color: gray;
  }

  button {
    font-size: 18px;
    font-weight: 700;
    line-height: 17px;
    text-decoration: none;
    cursor: pointer;
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }

  footer p {
    font-size: 14px;
    font-weight: 400;
    line-height: 10px;
  }

  footer sub {
    font-size: 10px;
    font-weight: 400;
  }
`;

export default GlobalStyle;