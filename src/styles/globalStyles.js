import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --primary-color: #F79D65;
    --secondary-color: #F7B267;
    --accent-color: #F27059;
    --auxiliary-color: #ffffff
    --text-dark: #000000;
    --text-light: #ffffff;
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lexend", sans-serif;
    outline: none;
  }

`;
