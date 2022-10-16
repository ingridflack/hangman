import styled from "styled-components";

// #dc3545; vermelho
// #198754; verde

export const LetterButtonContainer = styled.button`
  padding: 14px 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 4px;
  transition: background-color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #c3c3c3;
  }
`;
