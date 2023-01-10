import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
	  vertical-align: baseline;
	font: inherit;
	vertical-align: baseline;
  }
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
  box-sizing: border-box;  
  background-color: ${(props: any) => props.theme.bgColor};
  transition: all 0.2s linear;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  html{
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }
`;
