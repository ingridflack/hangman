import styled, { createGlobalStyle } from "styled-components";
import { WordContainer } from "../components/Word/styles";

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

#root {
  height: 100vh;
}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    margin: 20px 0;
  }
`;

export const WordWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  align-items: flex-end;
`;
