import { createGlobalStyle } from "styled-components";

export const Globalstyle= createGlobalStyle`
body{
  font-family: 'Open Sans Candance';
  padding: 20px 30px;

  @media screen and (max-width:800px) {
    padding:5px;
  }
}
a{
  text-decoration: none;
  color: black;
}
*{
  box-sizing: border-box;
}
`