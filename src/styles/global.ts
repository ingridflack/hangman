import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

body {
background-color: #f6f6ef;
}
`;
