import styled from "styled-components";

export const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LetterButton = styled.button`
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
