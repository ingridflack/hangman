import styled, { css } from "styled-components";

export const LETTER_STATE = {
  DEFAULT: "DEFAULT",
  POSITIVE: "POSITIVE",
  NEGATIVE: "NEGATIVE",
};

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

export const LetterButton = styled.button<{ state: keyof typeof LETTER_STATE }>`
  padding: 14px 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 4px;
  transition: background-color 300ms ease-in-out;
  text-transform: uppercase;

  ${({ state }) => {
    switch (state) {
      case LETTER_STATE.NEGATIVE:
        return css`
          &,
          &:hover {
            background-color: red;
          }
        `;
      case LETTER_STATE.POSITIVE:
        return css`
          &,
          &:hover {
            background-color: green;
          }
        `;
      default:
        return css`
          background-color: #c3c3c3;

          &:hover {
            background-color: gray;
          }
        `;
    }
  }}
`;
