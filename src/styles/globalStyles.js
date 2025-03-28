import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`

  :root {
    --base-color: #998783;
    --primary-color: #CEBCB2;
    --secondary-color: #F3D7C2;
    --auxiliary-color: #E6C099;
    --accent-color: #D1A274;
    --text-dark: #2B2B2B;
    --text-light: #FFFFFF;
    --success-color: #9ACD32;
    --problem-color: #E9967A;
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lexend", sans-serif;
    outline: none;
  }

`;
